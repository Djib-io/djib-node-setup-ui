import React, { useEffect, useContext } from "react";
import Box from "../components/Box";
import Container from "../components/Container";
import Header from "../components/Header";
import LineCharts from "../components/LineChart";
import Loading from "../components/Loading";
import Value from "../components/Value";
import BUtton from "../components/Button";
import prettydate from "pretty-date";
import { ReactComponent as Logo } from "./../assets/icons/logo.svg";

import toast from "react-hot-toast";

import SetupContext from "../stores/setup/SetupContext";
import { setupInfo } from "../stores/setup/SetupAction";
import axios from "axios";

function Home() {
  const { data, dispatch } = useContext(SetupContext);

  const setup = async () => {
    const setupinf = await setupInfo();
    dispatch({ type: "SETUP_INFO", payload: setupinf });
  };
  useEffect(() => {
    setup();
  }, []);

  const onClaimClick = async () => {
    try {
      const res = await axios.post(
        "http://167.235.133.112:3045/api/reward/claim",
        {
          token: localStorage.getItem("djibtoken"),
        }
      );
      toast.success("Claimed");
    } catch (error) {
    }
  };
  return (
    <Container>
      {!data && (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      )}
      {data && data.info && (
        <>
          <Header />
          <div className="w-full flex flex-col gap-8 pb-16">
            <div className="flex gap-8 mt-24 items-stretch">
              <div className="w-1/2">
                <Box className={"flex flex-col gap-4 h-full"}>
                  <Value label={"Your Balance:"} value={"4,997.53 $DJIB"} />
                  <Value label="Your IP Address:" value={data.ip} />
                  <Value label="Domain:" value={data.info.dn} />
                  <Value label="Your Wallet Address:" value={data.info.id} />
                  <Value
                    label={"DJIB Locked:"}
                    value={`${new Intl.NumberFormat("ja-IN").format(
                      data.info.staking
                    )} $DJIB`}
                  />
                  <Value
                    label={"Average lock duration:"}
                    value={prettydate.format(new Date(data.info.locked_at))}
                  />
                  <Value
                    label={"Total Stake:"}
                    value={`${new Intl.NumberFormat("ja-IN").format(
                      data.info.total_staking
                    )} $DJIB`}
                  />
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
                      {`${data.info.djib_price.price} ${data.info.djib_price.symbol}`}
                    </p>
                  </div>

                  <Value
                    label={"Address:"}
                    value={"3Hi27r9kUtSmiPYtpRJNYCCGTGosnqC5Dhz812TrjpaY"}
                  />
                  <Value label={"Minted Supply:"} value={"100,000,000"} />
                  <Value label={"Decimals:"} value={"9"} />
                  <div className="flex justify-between pt-32">
                    <p className="text-3xl text-slate-600 font-medium">
                      {/* {`${response.data.info.djib_price.price} ${response.data.info.djib_price.symbol}`} */}
                      19,000 $DJIB
                    </p>
                    <BUtton onClick={() => onClaimClick()}>Claim</BUtton>
                  </div>
                </Box>
              </div>
            </div>
            <div>
              <p>overview</p>
            </div>

            <Box className={"flex flex-col gap-4"}>
              <p className="text-slate-600 text-2xl font-semibold">
                Resourec Monitor
              </p>
              <LineCharts height={200} />
            </Box>
          </div>
        </>
      )}
    </Container>
  );
}

export default Home;
