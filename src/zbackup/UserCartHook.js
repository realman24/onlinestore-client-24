// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addProductToCart,
//   getAllUserCartItems,
// } from "../../redux/actions/cartAction";
// import notify from "../useNotify";

// const UserCartHook = (pId) => {
//   const [loading, setLoading] = useState(true);
//   const [cartItems, setCartItems] = useState([]);
//   const [numOfCartItems, setNumOfCartItems] = useState(0);
//   const [updateCart, setUpdateCart] = useState(true);

//   const dispatch = useDispatch();

//   // Add Item To Cart
//   const addToCart = async () => {
//     setUpdateCart(true);
//     await dispatch(addProductToCart({ productId: pId }));
//     setUpdateCart(false);
//   };

//   const resAdd = useSelector((state) => state.cartReducer.addToCart);

//   useEffect(() => {
//     if (updateCart === false) {
//       if (resAdd && resAdd.status === 200) {
//         notify("Item Added To Cart Successfully", "success");
//         setTimeout(() => {
//           window.location.reload(false);
//         }, 3000);
//       } else {
//         notify("For Add Items to Cart, Login", "warn");
//       }
//     }
//   }, [updateCart]);

//   // Get the list of cart items
//   useEffect(() => {
//     const getAllItems = async () => {
//       setLoading(true);
//       await dispatch(getAllUserCartItems());
//       setLoading(false);
//     };
//     getAllItems();
//   }, []);

//   const res = useSelector((state) => state.cartReducer.getAllUserCart);
//   console.log(res);

//   useEffect(() => {
//     if (loading === false) {
//       if (res !== undefined) {
//         setCartItems(res.data);
//       } else setCartItems([]);
//     }
//   }, [loading]);

//   useEffect(() => {
//     if (loading === false) {
//       if (res && res.numOfCartItems !== undefined) {
//         setNumOfCartItems(res.numOfCartItems);
//       }
//     }
//   }, [loading]);

//   return [cartItems, numOfCartItems, addToCart];
// };

// export default UserCartHook;
