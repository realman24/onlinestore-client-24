import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createOrder,
  getAllOrders,
  getOneOrder,
} from "../../redux/actions/orderActions";

import notify from "../useNotify";
import { useNavigate } from "react-router-dom";
import { AllCartItemsHook } from "../../hooks/user/UserCartHooks";
import { ShippingAdrsHook } from "./CheckoutHook";

export const CraeteCashOrderHook = (cartId, shippingAdrs) => {
  const [loading, setLoading] = useState(true);
  // const [address, setAddress] = useState("");
  const [orderData, setOrderData] = useState("");

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [shippingAdrs] = ShippingAdrsHook(addressId);

  // Add New
  const onSubmit = async () => {
    setLoading(true);
    await dispatch(
      createOrder(cartId, {
        shippingAddress: {
          // details,
          // phone,
          // city,
          // postalCode,
        },
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.orderReducer.newOrder);
  console.log(res);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        setOrderData(res.data);
        setTimeout(() => {
          notify("Adress Added Successfuly", "success");
          //   navigate("/user/addresses");
        }, 3000);
      } else {
        notify("There are a problem, please try again", "error");
      }
    }
  }, [loading]);

  return [onSubmit, orderData];
};

export const AllUserOrders = () => {
  const [loading, setLoading] = useState(true);
  const [allOrders, setAllOrders] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const allOrders = async () => {
      setLoading(true);
      await dispatch(getAllOrders());
      setLoading(false);
    };
    allOrders();
  }, []);

  const res = useSelector((state) => state.orderReducer.allUserOrders);
  console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res !== undefined) {
        setAllOrders(res.data);
      } else setAllOrders([]);
    }
  }, [loading]);

  console.log(allOrders);

  return [allOrders];
};

export const OneUserOrder = (cartId) => {
  const [loading, setLoading] = useState(true);
  const [oneOrder, setOneOrder] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const OneOrder = async () => {
      setLoading(true);
      await dispatch(getOneOrder(cartId));
      setLoading(false);
    };
    OneOrder();
  }, []);

  const res = useSelector((state) => state.orderReducer.oneOrder);

  useEffect(() => {
    if (loading === false) {
      if (res !== undefined) {
        setOneOrder(res.data);
      } else setOneOrder([]);
    }
  }, [loading]);

  return [oneOrder];
};
