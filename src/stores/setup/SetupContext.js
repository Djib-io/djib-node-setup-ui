import { createContext, useReducer } from "react";
import setupReducer from "./SetupReducer";

const SetupContext = createContext();

export const SetupProvider = ({ children }) => {
  const initialState = {
  };

  const [state, dispatch] = useReducer(setupReducer, initialState);
  return (
    <SetupContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
};

export default SetupContext;
