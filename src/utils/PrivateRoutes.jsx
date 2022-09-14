import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import SetupContext from "../stores/setup/SetupContext";
const PrivateRoutes = () => {
  const { data } = useContext(SetupContext);
  return data ? (
    data.registered == false ? (
      <Navigate to="/wallet" />
    ) : data.staked == false ? (
      <Navigate to="/stake-djib-token" />
    ) : data.password == false ? (
      <Navigate to="/set-username-and-password" />
    ) : !localStorage.getItem("djibtoken") ? (
      <Navigate to="/login" />
    ) : (
      <Outlet />
    )
  ) : null;
};

export default PrivateRoutes;
