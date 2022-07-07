import React from "react";
import { Wallet } from "./Wallet";
import { BrowserRouter } from "react-router-dom";

function Providers({ children }) {
  return (
    <Wallet>
      <BrowserRouter>{children}</BrowserRouter>
    </Wallet>
  );
}

export default Providers;
