import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAddress,
  getAllAddresses,
  deleteAddress,
  getOneAddress,
  updateAddress,
} from "../../redux/actions/addressActions";
import notify from "../useNotify";
import { useNavigate } from "react-router-dom";

export const AddAddressesHook = () => {
  const [loading, setLoading] = useState(true);
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("0000");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeAlias = (event) => {
    event.persist();
    setAlias(event.target.value);
  };

  const onChangeDetails = (event) => {
    event.persist();
    setDetails(event.target.value);
  };

  const onChangeCity = (event) => {
    event.persist();
    setCity(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };

  const onChangePostal = (event) => {
    event.persist();
    setPostal(event.target.value);
  };
  // Add New Adress
  const onSubmit = async () => {
    if (alias === "" || details === "" || city === "" || phone === "") {
      notify("Please , Add All Info", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addNewAddress({
        alias: alias,
        details: details,
        phone: phone,
        city: city,
        postalCode: postal,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.addressReducer.addAddress);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("Adress Added Successfuly", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 1000);
      } else {
        notify("There are a problem, please try again", "error");
      }
    }
  }, [loading]);

  return [
    alias,
    details,
    city,
    phone,
    postal,
    onChangeAlias,
    onChangeDetails,
    onChangeCity,
    onChangePhone,
    onChangePostal,
    onSubmit,
  ];
};

export const GetAllAddressesHook = () => {
  const [loading, setLoading] = useState(true);
  const [adresses, setAdresses] = useState([]);

  const dispatch = useDispatch();

  // Get the list of Addresses
  useEffect(() => {
    const AllAddresses = async () => {
      setLoading(true);
      await dispatch(getAllAddresses());
      setLoading(false);
    };
    AllAddresses();
  }, []);

  const res = useSelector((state) => state.addressReducer.allAddresses);
  console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res !== undefined) {
        setAdresses(res.data);
      } else setAdresses([]);
    }
  }, [loading]);

  console.log(adresses);

  return [adresses];
};

export const DeleteAddressHook = (id) => {
  const [loading, setLoading] = useState(true);
  const [adresses, setAdresses] = useState([]);

  const dispatch = useDispatch();

  // Delete cart item
  const deleteAdd = async () => {
    setLoading(true);
    await dispatch(deleteAddress(id));
    setLoading(false);
  };

  const res = useSelector((state) => state.addressReducer.deleteAddress);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        notify("Address deleted Successfully", "error");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("Address Not Deleted", "warn");
      }
    }
  }, [loading]);

  return [deleteAdd];
};

export const GetOneAddress = (id) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // get one cart item
  useEffect(() => {
    const getOneAdd = async () => {
      setLoading(true);
      await dispatch(getOneAddress(id));
      setLoading(false);
    };
    getOneAdd();
  }, []);

  const res = useSelector((state) => state.addressReducer.oneAddress);

  console.log(res.data);
  const oneAdress = res.data;

  useEffect(() => {
    if (loading === false) {
      if (res) {
        notify("Address get Successfully", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("Address Do Not Get", "warn");
      }
    }
  }, []);

  return [oneAdress];
};

export const UpdateAddressHook = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [oneAdress] = GetOneAddress(id);

  let aliasReq;
  let detailsReq;
  let cityReq;
  let phoneReq;
  let postalReq;
  if (oneAdress) {
    aliasReq = oneAdress.alias;
    detailsReq = oneAdress.details;
    cityReq = oneAdress.city;
    phoneReq = oneAdress.phone;
    postalReq = oneAdress.postal;
  }

  const [loading, setLoading] = useState(true);
  const [alias, setAlias] = useState(aliasReq);
  const [details, setDetails] = useState(detailsReq);
  const [city, setCity] = useState(cityReq);
  const [phone, setPhone] = useState(phoneReq);
  const [postal, setPostal] = useState(postalReq);

  useEffect(() => {
    setAlias(aliasReq);
    setDetails(detailsReq);
    setCity(cityReq);
    setPhone(phoneReq);
    setPostal(postalReq);
  }, [aliasReq, detailsReq, cityReq, phoneReq, postalReq]);

  const onChangeAlias = (event) => {
    event.persist();
    setAlias(event.target.value);
  };

  const onChangeDetails = (event) => {
    event.persist();
    setDetails(event.target.value);
  };

  const onChangeCity = (event) => {
    event.persist();
    setCity(event.target.value);
  };

  const onChangePhone = (event) => {
    event.persist();
    setPhone(event.target.value);
  };

  const onChangePostal = (event) => {
    event.persist();
    setPostal(event.target.value);
  };

  // Add New Adress
  const onSubmit = async () => {
    setLoading(true);
    await dispatch(
      updateAddress(id, {
        alias: alias,
        details: details,
        phone: phone,
        city: city,
        postalCode: postal,
      })
    );
    setLoading(false);
  };

  const updateRes = useSelector((state) => state.addressReducer.editAddress);

  useEffect(() => {
    if (loading === false) {
      if (updateRes && updateRes.status === 200) {
        notify("Adress Updated Successfuly", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 1000);
      } else {
        notify("There are a problem, please try again", "error");
      }
    }
  }, [loading]);

  return [
    alias,
    details,
    city,
    phone,
    postal,
    onChangeAlias,
    onChangeDetails,
    onChangeCity,
    onChangePhone,
    onChangePostal,
    onSubmit,
  ];
};
