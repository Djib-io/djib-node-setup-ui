import { useWallet } from "@solana/wallet-adapter-react";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import axios from "axios";
import Base58 from "base-58";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({ logout: () => {} });


function Auth({ children }) {
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");
  const { publicKey, signMessage, connecting, disconnect, connected } =
    useWallet();
  publicKey && localStorage.setItem("publicKey", publicKey.toBase58());
  let navigate = useNavigate();

  const authFinalized = async (publicKey, signature) => {
    if (!connected) {
      console.log("api")
    }

    try {
      const res = await axios.post(
        "/api/auth/login",
        {
          public_key: publicKey.toBase58(),
          signature: Base58.encode(signature),
        }
      );
      localStorage.setItem("djibtoken",res.data.data)
      navigate('/stake-djib-token');
    } catch (error) {
      console.log(error);
      setStatus("Error");
    }
  };
  const logOn = useCallback(async () => {

    if (!token) {
      setStatus("loading");
      try {
        const res = await axios.post(
          "/api/auth/handshake",
          { public_key: publicKey.toBase58() }
        );
        const message = new TextEncoder().encode(res.data.data);

        const signature = await signMessage(message);

        await authFinalized(publicKey, signature);

        setStatus("ok");
        setToken("tokenized")
      } catch (error) {
        setStatus("Error");
        toast.error(error.message + "Something went wrong!");
        disconnect();
      }
    } else setStatus("Error");
  }, [publicKey]);

  const contextValue = useMemo(
    () => ({
      disconnect,
    }),
    [disconnect]
  );
  useEffect(() => {

    publicKey && logOn();

    if (connecting) setStatus("loading");
    else if (!connecting && !connected) setStatus("connect_wallet")
    if (connected) {
      navigate("/")
    };
  }, [publicKey, connected,connecting]);

  return (
    <AuthContext.Provider value={contextValue}>
      {status === "loading" ? (
        <Loading style={{ height: "100vh" }} />
      ) : (
        <>{children}</>
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default Auth;
