import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <div className="home">
    <BrowserRouter basename={process.env.REACT_APP_URL_LOCAL}>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
