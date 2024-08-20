import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneUser,
  getAllUser,
  deleteUser,
  updateUser,
} from "../../redux/actions/authAction";
import notify from "../useNotify";
import { useNavigate } from "react-router-dom";

export const GetOneUserHook = (id) => {
  const [loading, setLoading] = useState(true);
  // const [userInfo, setUserInfo] = useState("");

  const dispatch = useDispatch();

  // get one cart item
  useEffect(() => {
    const OneUser = async () => {
      setLoading(true);
      await dispatch(getOneUser(id));
      setLoading(false);
    };
    OneUser();
  }, []);

  const res = useSelector((state) => state.authReducer.oneUser);

  // useEffect(() => {
  console.log(res.name);
  const userInfo = res;
  // }, []);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        notify("You Get User Info Successfully", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 3000);
      } else {
        notify("User Info Dose Not Get", "warn");
      }
    }
  }, []);

  return [userInfo];
};

export const UpdateUserHook = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo] = GetOneUserHook(id);
  let nameReq;

  if (userInfo) {
    nameReq = userInfo.name;
  }

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(nameReq);

  useEffect(() => {
    setName(nameReq);
  }, [nameReq]);

  const onChangeName = (event) => {
    event.persist();
    setName(event.target.value);
    console.log(event.target.value);
  };

  // Add New User Name
  const onSubmit = async () => {
    setLoading(true);
    await dispatch(
      updateUser(id, {
        name: name,
      })
    );
    setLoading(false);
  };

  const updateRes = useSelector((state) => state.authReducer.updateUser);

  useEffect(() => {
    if (loading === false) {
      if (updateRes && updateRes.status === 200) {
        notify("Name Changed Successfuly", "success");
        localStorage.removeItem("user");
        window.location.href = "/";
        setTimeout(() => {
          navigate("/user/profile");
        }, 1000);
      } else {
        notify("There are a problem, please try again", "error");
      }
    }
  }, [loading]);

  return [name, onChangeName, onSubmit];
};

// Delete User
export const DelUserHook = (id) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const DelUser = async () => {
    setLoading(true);
    await dispatch(deleteUser(id));
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.deleteUser);
  console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        notify("User deleted Successfully", "success");
        setTimeout(() => {
          localStorage.removeItem("user");
          window.location.href = "/";
          // window.location.reload(false);
        }, 1000);
      } else {
        notify("User Not Deleted", "warn");
      }
    }
  }, [loading]);

  return [DelUser];
};
