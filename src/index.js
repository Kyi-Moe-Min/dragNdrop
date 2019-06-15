import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

function Apps() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Apps />, rootElement);
