import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { KinoProvider } from "./Context";
ReactDOM.render(
  <React.StrictMode>
    <KinoProvider>
      <App />
    </KinoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
