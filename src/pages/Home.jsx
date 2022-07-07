import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import Box from "../components/Box";
import Container from "../components/Container";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import Loading from "../components/Loading";
import Value from "../components/Value";
import useFetch from "../hooks/useFetch";
import { ReactComponent as Logo } from "./../assets/icons/logo.svg";

function Home() {
  const { response, loading } = useFetch("https://geolocation-db.com/json/");
  const { publicKey } = useWallet();

  return (
    <Container>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      )}
      {!loading && (
        <>
          <Header />
          <div className="w-full flex flex-col gap-8 pb-16">
            <div className="flex gap-8 mt-24 items-stretch">
              <div className="w-1/2">
                <Box className={"flex flex-col gap-4 h-full"}>
                  <Value label={"Your Balance:"} value={"4,997.53 DJIB"} />
                  <Value label="Your IP Address:" value={response.IPv4} />
                  <Value label="Domain:" value={"4389fhn_bdsk84f.example.io"} />
                  <Value
                    label="Your Wallet Address:"
                    value={
                      "DbEzkb8UkKqueFZTZhHs5ktTqgeB7MXwo8xkQKqLkkC4" ||
                      publicKey.toBase58()
                    }
                  />
                  <Value label={"DJIB Locked:"} value={"24,997.53 DJIB"} />
                  <Value label={"Average lock duration:"} value={"38 weeks"} />
                  <Value label={"Total Stake:"} value={"943,435,997.543 DJIB"} />

                </Box>
              </div>
              <div className="w-1/2">
                <Box className={"flex flex-col gap-4 h-full"}>
                  <div className="flex justify-between items-center">
                    <div>
                      <Logo width={50} />
                      <p className="text-lg text-slate-600 font-semibold mt-1">
                        DJIB Coin
                      </p>
                    </div>
                    <p className="text-3xl text-slate-600 font-medium">
                      132.43$
                    </p>
                  </div>

                  <Value
                    label={"Address:"}
                    value={"3Hi27r9kUtSmiPYtpRJNYCCGTGosnqC5Dhz812TrjpaY"}
                  />
                    <Value label={"Minted Supply:"} value={"99,999,927.99"} />
                    <Value label={"Decimals:"} value={"9"} />

                  <LineChart height={200} />
                </Box>
              </div>
            </div>
            <Box className={"flex flex-col gap-4"}>
              <p className="text-slate-600 text-2xl font-semibold">Chart 1</p>
              <LineChart height={200} />
            </Box>
            <Box className={"flex flex-col gap-4"}>
              <p className="text-slate-600 text-2xl font-semibold">Chart 2</p>
              <LineChart height={200} />
            </Box>
            <Box className={"flex flex-col gap-4"}>
              <p className="text-slate-600 text-2xl font-semibold">Chart 2</p>
              <LineChart height={200} />
            </Box>
          </div>
        </>
      )}
    </Container>
  );
}

export default Home;
