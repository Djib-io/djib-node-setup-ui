import React from "react";
import { ReactComponent as Logo } from "./../assets/icons/logo-text.svg";

function Header() {
  return (
    <div className="fixed top-0 w-full left-0 right-0 bg-white/[.1] backdrop-blur-lg z-50">
      <div className="container flex py-4 mx-auto">
        <Logo height={44} />
      </div>
    </div>
  );
}

export default Header;
