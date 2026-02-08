import React, { useEffect } from "react";
import AddressCard from "../addressCard/AddressCard";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../state/order/Action";
import { useLocation } from "react-router-dom";
import { Button, Divider } from "@mui/material";
import CartItems from "../cart/CartItems";
import { createPayment } from "../../../state/payment/Action";

const OrderSummary = () => {
  const { order, loading, error } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCheckout = () => {
    dispatch(createPayment(orderId));
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border border-gray-300 mb-5">
        <AddressCard address={order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {order?.orderItems.map((item) => (
              <CartItems key={item.id} item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-screen mt-5 lg:mt-0">
            <div className="border border-gray-300 p-5 mt-2 ">
              <p className="uppercase opacity-60 pb-4">Price Details</p>
              <Divider />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">-₹{order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ₹{order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                variant="contained"
                className="w-full"
                sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
