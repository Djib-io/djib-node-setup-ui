import { createContext, useReducer } from "react";
import metricReducer from "./MetricReducer";

const MetricContext = createContext();

export const MetricProvider = ({ children }) => {
  const initialState = {
   
  };

  const [state, dispatch] = useReducer(metricReducer, initialState);
  return (
    <MetricContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MetricContext.Provider>
  );
};

export default MetricContext;
