import React from "react";
import AddressCard from "../addressCard/AddressCard";
import Cart from "../cart/Cart";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border border-gray-300 mb-5">
        <AddressCard />
      </div>
      <Cart />
    </div>
  );
};

export default OrderSummary;
