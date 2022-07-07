import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";

function StakeDjib() {
  return (
    <Container>
      <Header />
      <div className="box-container">
        <Box>
          <h1 className="text-3xl text-slate-700 font-medium text-center mt-4 w-96">
            Stake Djib token
          </h1>
          <div className="w-96 text-slate-500 my-4 mb-6 text-center">
            Sint ex anim pariatur sit voluptate. Dolor tempor minim ad. Est
            Lorem ad veniam elit tempor adipisicing consequat sit voluptate
            tempor est culpa aliqua nulla laborum. Fugiat pariatur enim culpa
            irure proident pariatur officia.
          </div>
          <Button fullWidth={true}>Stake</Button>
        </Box>
      </div>
    </Container>
  );
}

export default StakeDjib;
