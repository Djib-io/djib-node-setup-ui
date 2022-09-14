import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Wallet } from "./Wallet";


function Providers({ children }) {
  return (
    <>
    <Wallet>
        <BrowserRouter>{children}</BrowserRouter>
    </Wallet>
    </>
  );
}

export default Providers;
