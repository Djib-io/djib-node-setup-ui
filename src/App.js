import WalletConnect from "./pages/ConnectWallet";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import StakeDjib from "./pages/StakeDjib";
import SetUserPass from "./pages/SetUserPass";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import { MetricProvider } from "./stores/metrics/MetricContext";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          className: "border-2 border-slate-100",
          style: {
            boxShadow: "0px 11px 60px rgba(0, 89, 176, 0.15)",
          },
          duration: 5000,
        }}
      />
      <MetricProvider>
        <Routes>
          <Route path="wallet" element={<WalletConnect />} />
          <Route path="login" element={<Login />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="stake-djib-token" element={<StakeDjib />} />
          <Route path="set-username-and-password" element={<SetUserPass />} />
          <Route to="/" element={<PrivateRoutes />}>
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
      </MetricProvider>
    </>
  );
}

export default App;
