import WalletConnect from "./pages/ConnectWallet";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import StakeDjib from "./pages/StakeDjib";
import SetUserPass from "./pages/SetUserPass";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WalletConnect />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="stake-djib-token" element={<StakeDjib />} />
      <Route path="set-username-and-password" element={<SetUserPass />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
