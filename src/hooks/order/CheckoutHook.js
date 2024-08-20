import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneAddress } from "../../redux/actions/addressActions";

export const ShippingAdrsHook = (id) => {
  const [loading, setLoading] = useState(true);
  const [shippingAdrs, setShippingAdrs] = useState([]);

  const dispatch = useDispatch();

  // get Adress details
  useEffect(() => {
    const getAdrsDtls = async () => {
      setLoading(true);
      await dispatch(getOneAddress(id));
      setLoading(false);
    };
    getAdrsDtls();
  }, []);

  const res = useSelector((state) => state.addressReducer.oneAddress);

  useEffect(() => {
    if (res.data) setShippingAdrs(res.data);
  }, [loading]);

  return [shippingAdrs];
};
