import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
    <App />
    <footer
      style={{ margin: "20px", fontFamily: "'Black Han Sans', sans-serif" }}
    >
      &copy; HYEOZ {new Date().getFullYear()}
    </footer>
  </BrowserRouter>,
  document.getElementById("root")
);
