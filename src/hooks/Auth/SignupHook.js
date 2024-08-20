import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotify";

import { createNewUser } from "../../redux/actions/authAction";

const RegisterHook = () => {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regLoading, setRegLoading] = useState(true);

  const dispatch = useDispatch();

  const handleRegName = (e) => {
    setRegName(e.target.value);
    console.log(e.target.value);
  };
  const handleRegEmail = (e) => {
    setRegEmail(e.target.value);
    console.log(e.target.value);
  };
  const handleRegPassword = (e) => {
    setRegPassword(e.target.value);
    console.log(e.target.value);
  };

  const regValidation = () => {
    if (regName === "" || regPassword === "" || regEmail === "") {
      notify("Please Fill All Fields", "error");
      return;
    }
    if (regPassword.length <= 5) {
      notify("Password Should Be Six Characters at Least", "error");
      return;
    }
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      regValidation();
    }, "5000");
    setRegLoading(true);
    await dispatch(
      createNewUser({
        name: regName,
        email: regEmail,
        password: regPassword,
      })
    );

    setRegLoading(false);
    setRegName("");
    setRegEmail("");
    setRegPassword("");
  };

  const res = useSelector((state) => state.authReducer.createUser);
  console.log(res);

  useEffect(() => {
    if (regLoading === false) {
      if (res) {
        console.log(res);

        if (res.data.accessToken) {
          localStorage.setItem("token", res.data.accessToken);
          console.log(res.data.accessToken);
          notify(" Register Success", "success");

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regLoading]);

  return [
    regName,
    regEmail,
    regPassword,
    handleRegName,
    handleRegEmail,
    handleRegPassword,
    submitRegister,
  ];
};

export default RegisterHook;
