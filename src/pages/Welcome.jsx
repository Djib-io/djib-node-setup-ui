import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Value from "../components/Value";
import useFetch from "../hooks/useFetch";
import "./../styles/Welcome.css";
import Header from "../components/Header";
import Container from "../components/Container";

function Welcome(props) {
  const { publicKey } = useWallet();
  const { response, loading } = useFetch("https://geolocation-db.com/json/");

  return (
    <Container>
      <Header />
      <div className="box-container">
        {loading && <Loading />}
        {!loading && (
          <Box className={"welcome"}>
            <h1 className="text-3xl text-slate-700 font-medium text-center">
              Wellcome
            </h1>
            <div className="max-w-lg text-slate-500">
              Sint ex anim pariatur sit voluptate. Dolor tempor minim ad. Est
              Lorem ad veniam elit tempor adipisicing consequat sit voluptate
              tempor est culpa aliqua nulla laborum. Fugiat pariatur enim culpa
              irure proident pariatur officia.
            </div>
            <Value label="Your IP Address:" value={response.IPv4} />
            <Value
              label="Your Wallet Address:"
              value={
                "DbEzkb8UkKqueFZTZhHs5ktTqgeB7MXwo8xkQKqLkkC4" ||
                publicKey.toBase58()
              }
            />

            <div className="mt-4">
              <Button fullWidth={true}>Next</Button>
            </div>
          </Box>
        )}
      </div>
    </Container>
  );
}

export default Welcome;
