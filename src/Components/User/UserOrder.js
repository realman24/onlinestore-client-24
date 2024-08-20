import React from "react";
import { Row } from "react-bootstrap";
import UserOrderItem from "./UserOrderItem";
import { AllUserOrders } from "../../hooks/order/OrderHooks";

const UserOrder = () => {
  const [allOrders] = AllUserOrders();
  console.log(allOrders);
  return (
    <div className="admin-profile">
      <div className="admin-content-text pb-4">Your Orders </div>
      <Row className="justify-content-between">
        {/* <UserOrderItem /> */}
        {allOrders.length > 0 ? (
          allOrders.map((order, index) => {
            return <UserOrderItem key={index} order={order} />;
          })
        ) : (
          <h6>Ther is No Order</h6>
        )}
      </Row>
    </div>
  );
};

export default UserOrder;
