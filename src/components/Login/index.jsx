import React from "react";
import md5 from "md5";
// import Cookies from "universal-cookie";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import "./Input/Input.css";
import "./../../styles/react-confirm-alert.css";

const Login = () => {
  return (
   <>{md5("Hola")}</>
  );
};

export default Login;
