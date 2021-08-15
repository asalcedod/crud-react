import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "reactstrap";
import md5 from "md5";
import CustomInput from "./Input/Index";
import PasswordModal from "./PasswordModal";
import RegisterModal from "./RegisterModal";
import Logo from "./Logo/Logo";
import Label from "./Label/Label";
import axios from "axios";
import Cookies from "universal-cookie";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import "./Input/Input.css";
import { confirmAlert } from "react-confirm-alert";
import "./../../styles/react-confirm-alert.css";

const Login = (props) => {
  let baseUrl = process.env.REACT_APP_API_LOCAL
  switch (process.env.NODE_ENV) {
    case "development":
      baseUrl = process.env.REACT_APP_API_DEV
      break;
    case "production":
      baseUrl = process.env.REACT_APP_API_PRODUCTION
      break;

    default:
      break;
  }
  const cookies = new Cookies();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  const login = async () => {
    await axios
      .put(baseUrl + `login`, form)
      .then((response) => {
        ifMatch(response.data.data);
      })
      .catch((err) => {
        setHasError(true);
        alert(err);
      });
  };

  useEffect(() => {
    if (cookies.get("form")) {
      props.history.push("/");
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      if (value.length < 6) {
        setPasswordError(true);
        setForm({
          ...form,
          [name]: null,
        });
      } else {
        setPasswordError(false);
        setForm({
          ...form,
          [name]: md5(value),
        });
      }
    } else {
      if (value.length < 2) {
        setUsernameError(true);
        setForm({
          ...form,
          [name]: null,
        });
      } else {
        setUsernameError(false);
        setForm({
          ...form,
          [name]: value,
        });
      }
    }
  };

  const ifMatch = (param) => {
    if (param.username === form.username && param.password === form.password) {
      cookies.set("form", param, { path: "/" });
      // setIsLogin(true);
      props.history.push("/Submit");
    } else {
      // setIsLogin(false);
      setEmail(param);
      setHasError(true);
      confirmAlert({
        title: "Password or username incorrect",
        message: "Do you want to try with another username?",
        buttons: [
          {
            label: "Yes",
            onClick: () => window.location.reload(),
          },
          {
            label: "No",
          },
        ],
      });
    }
  };

  return (
   <div>Hola</div>
  );
};

export default Login;
