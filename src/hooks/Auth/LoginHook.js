import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotify";

import { loginUser } from "../../redux/actions/authAction";

const LoginHook = () => {
  const [email, setEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(true);

  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
    console.log(e.target.value);
  };

  console.log(email);

  const submitLogin = async (e) => {
    e.preventDefault();
    // setTimeout(() => {}, "5000");
    setLoginLoading(true);
    await dispatch(
      loginUser({
        email: email,
        password: loginPassword,
      })
    );

    setLoginLoading(false);
  };

  const res = useSelector((state) => state.authReducer.loginUser);

  useEffect(() => {
    if (loginLoading === false) {
      if (res) {
        console.log(res);
        if (res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("user", JSON.stringify(res.data));

          notify("Login Successfully", "success");
          setEmail("");
          setLoginPassword("");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (res.statusText !== "OK") {
          notify(res.data.msg, "error");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        setLoginLoading(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginLoading]);

  return [email, loginPassword, handleEmail, handleLoginPassword, submitLogin];
};

export default LoginHook;
