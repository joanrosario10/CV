import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./stars.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <App />
  </StrictMode>,
  rootElement
);
