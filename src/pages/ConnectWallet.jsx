import React from "react";
import WalletBox from "../components/WalletBox";
import Header from "../components/Header";
import Container from "../components/Container";

function ConnectWallet(props) {
  return (
    <Container>
      <Header />
      <div className="box-container">
        <WalletBox />
      </div>
    </Container>
  );
}

export default ConnectWallet;
