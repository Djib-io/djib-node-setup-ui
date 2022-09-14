import React, { createContext, useContext, useEffect } from "react";
import SetupContext from "../stores/setup/SetupContext";
import { setupInfo } from "../stores/setup/SetupAction";
import Auth from "./Auth";
export const UserStatusContext = createContext({});

function UserStatus({ children }) {
  const { data, dispatch } = useContext(SetupContext);
  const setup = async () => {
    const setupinf = await setupInfo();
    dispatch({ type: "SETUP_INFO", payload: setupinf });
  };
  useEffect(() => {
    setup();
  }, []);
  return (
    <UserStatusContext.Provider value={data}>

          <Auth>{children}</Auth>

    </UserStatusContext.Provider>
  );
}
export default UserStatus;
