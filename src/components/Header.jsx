import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { ReactComponent as Logo } from "./../assets/icons/logo-text.svg";

function Header() {
  return (
    <div className="fixed top-0 w-full left-0 right-0 bg-white/[.1] backdrop-blur-lg z-50">
      <div className="container flex justify-between py-4 mx-auto">
        <Logo height={44} />
        <WalletMultiButton />
      </div>
    </div>
  );
}

export default Header;
