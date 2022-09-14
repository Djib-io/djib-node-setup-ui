import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import { createTransfer, parseURL } from "@solana/pay";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { interval } from "../utils/Interval";

import Loading from "../components/Loading";
function StakeDjib() {
  const navigate = useNavigate();
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);
  const [loadingText, setloadingText] = useState("");
  const { publicKey, signTransaction } = useWallet();

  const [errors, setErrors] = useState("");

  const onStakeClick = async () => {
    setLoading(true);
    setloadingText("Start Staking");
    try {
      const res = await axios.post(
        "http://167.235.133.112:3045/api/stake/create-payment",
        {
          token: localStorage.getItem("djibtoken"),
          amount: 0,
        }
      );
      const { recipient, amount, splToken, reference, memo } = parseURL(
        res.data.data.payment_url
      );

      const tx = await createTransfer(connection, publicKey, {
        recipient,
        amount,
        reference,
        memo,
        splToken,
      });
      setloadingText("Please approve ...");

      tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
      tx.feePayer = publicKey;
      await signTransaction(tx);

      await connection.sendRawTransaction(tx.serialize());

      let finalized = false;
      setloadingText("Waiting for confirmation");

      while (!finalized) {
        const resConfirm = await axios.post(
          "http://167.235.133.112:3045/api/stake/confirm-payment",
          {
            token: localStorage.getItem("djibtoken"),
            tracking_code: res.data.data.tracking_code,
          }
        );
        if (resConfirm.data.data.finalized) {
          navigate("/set-username-and-password");
        }
        finalized = resConfirm.data.data.finalized;
        if (!finalized) await interval(10000);
      }

      setErrors("");
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErrors(error);
    }
  };

  return (
    <Container>
      {loading ? (
        <Loading style={{ height: "100vh" }} label={loadingText} />
      ) : (
        <>
          <Header />
          <div className="box-container">
            <Box>
              <h1 className="text-3xl text-slate-700 font-medium text-center mt-4 w-96">
                Stake Djib token
              </h1>
              <div className="w-96 text-slate-500 my-4 mb-6 text-center">
                {errors && (
                  <>
                    <div
                      className="bg-warning-700 border-l-4 border-warning-600 text-warning-800 p-4"
                      role="alert"
                    >
                      <p className="font-bold">Be Warned</p>

                      <p>{errors}</p>
                    </div>
                  </>
                )}
              </div>
              <Button fullWidth={true} onClick={onStakeClick}>
                Stake
              </Button>
            </Box>
          </div>
        </>
      )}
    </Container>
  );
}

export default StakeDjib;
