import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import Input from "../components/Input";

function SetUserPass() {
  return (
    <Container>
      <Header />
      <div className="box-container">
        <Box className={"flex flex-col gap-4"}>
          <h1 className="text-3xl text-slate-700 font-medium text-center mt-4 mb-4">
            Set Username & Password
          </h1>

          <div className={"flex flex-col gap-1"}>
            <p className="text-sm text-slate-400">Username</p>
            <Input type="text" placeHolder={"Example"} />
          </div>

          <div className={"flex flex-col gap-1"}>
            <p className="text-sm text-slate-400">Password</p>
            <Input type="password" placeHolder={"••••••••"} />
          </div>

          <div className={"flex flex-col gap-1 mb-8"}>
            <p className="text-sm text-slate-400">Confirm password</p>
            <Input type="password" placeHolder={"••••••••"} />
          </div>

          <Button fullWidth={true}>Setup</Button>
        </Box>
      </div>
    </Container>
  );
}

export default SetUserPass;
