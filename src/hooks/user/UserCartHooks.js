import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  getAllUserCartItems,
  deleteCartItem,
  clearAllCartItem,
  updateCartItem,
} from "../../redux/actions/cartAction";
import notify from "../useNotify";

// Add Item To Cart
export const AddToCartHook = (pId) => {
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const dispatch = useDispatch();

  const addToCart = async () => {
    setLoading(true);
    await dispatch(addProductToCart({ productId: pId }));
    setLoading(false);
  };
  const resAdd = useSelector((state) => state.cartReducer.addToCart);

  useEffect(() => {
    if (loading === false) {
      if (resAdd && resAdd.status === 200) {
        notify("Item Added To Cart Successfully", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("For Add Items to Cart, Login", "warn");
      }
    }
  }, [loading]);

  return [addToCart];
};

// Get All Cart Items
export const AllCartItemsHook = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [numOfCartItems, setNumOfCartItems] = useState(0);

  const dispatch = useDispatch();

  // Get the list of cart items
  useEffect(() => {
    const getAllItems = async () => {
      setLoading(true);
      await dispatch(getAllUserCartItems());
      setLoading(false);
    };
    getAllItems();
  }, []);

  const res = useSelector((state) => state.cartReducer.getAllUserCart);
  console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res !== undefined) {
        setCartItems(res.data);
      } else setCartItems([]);
    }
  }, [loading]);

  useEffect(() => {
    if (loading === false) {
      if (res && res.numOfCartItems !== undefined) {
        setNumOfCartItems(res.numOfCartItems);
      }
    }
  }, [loading]);

  return [cartItems, numOfCartItems];
};

// Delete Cart Item
export const DelCartItemHook = (iId) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const DelCartItem = async () => {
    setLoading(true);
    await dispatch(deleteCartItem(iId));
    setLoading(false);
  };

  const resDel = useSelector((state) => state.cartReducer.deleteItem);

  useEffect(() => {
    if (loading === false) {
      if (resDel) {
        notify("Item deleted from the Cart Successfully", "error");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("Item Not Deleted", "warn");
      }
    }
  }, [loading]);

  return [DelCartItem];
};

// Delete All Cart Items
export const DelAllCartItemHook = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const DelAllCartItem = async () => {
    setLoading(true);
    await dispatch(clearAllCartItem());
    setLoading(false);
  };

  const resDelAll = useSelector((state) => state.cartReducer.clearCart);

  useEffect(() => {
    if (loading === false) {
      if (resDelAll.length === 0) {
        notify(" the Cart Cleared Successfully", "error");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("Cart Not Deleted", "warn");
      }
    }
  }, [loading]);

  return [DelAllCartItem];
};

// Update Quentaty Of Item
export const UpdateCartItemHook = (iId) => {
  const [itemCount, setItemCount] = useState(0);

  const dispatch = useDispatch();

  const onChangeCount = async (e) => {
    setItemCount(e.target.value);
    await dispatch(
      updateCartItem(iId, {
        quantity: e.target.value,
      })
    );

    window.location.reload(false);
  };

  const resUpdate = useSelector((state) => state.cartReducer.updateItem);

  const handeleUpdateCart = async () => {
    // await dispatch(
    //   updateCartItem(iId, {
    //     quantity: itemCount,
    //   })
    // );
    // console.log(itemCount);
    // window.location.reload(false);
  };

  return [setItemCount, itemCount, onChangeCount, handeleUpdateCart];
};
