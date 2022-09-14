import { WalletIcon } from "@solana/wallet-adapter-react-ui";

import "./../styles/WalletBox.css";
import Box from "./Box";

import { useWallet } from "@solana/wallet-adapter-react";

function WalletBox(pKey) {

  const { wallets, select } = useWallet();

  return (
    <Box className={"wallet-box-wrapper"}>
      <h1 className="text-3xl text-slate-700 font-medium mt-4">
        Connect Wallet
      </h1>
      <h6 className="text-normal text-slate-400 mt-1 mb-2">
        Select your wallet
      </h6>
      <ul className="wallet-box">
        {wallets.map((w) => (
          <li
            key={`wallet-${w.adapter.name}`}
            onClick={() => select(w.adapter.name)}
          >
            <WalletIcon wallet={w} /> {w.adapter.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default WalletBox;
