import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Providers from "./providers";
import { SetupProvider } from "./stores/setup/SetupContext"
import UserStatus from "./providers/UserStatus";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SetupProvider>
      <Providers>
        <UserStatus>
          <App />
        </UserStatus>
      </Providers>
    </SetupProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
