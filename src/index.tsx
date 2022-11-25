import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Context, state } from "context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={state}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
