import React, { useEffect } from "react";
import CartItems from "./CartItems";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../state/cart/Action";

const Cart = () => {
  const navige = useNavigate();
  const { cart, cartItems, loading, error, deleteCartItem, updateCartItem } =
    useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleCheckOut = () => {
    navige("/checkout?step=2");
  };
  useEffect(() => {
    dispatch(getCart());
  }, [deleteCartItem, updateCartItem]);
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart?.cartItems.map((item) => (
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
                <span>₹{cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart?.discounte}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{cart?.totalDiscountedPrice}
                </span>
              </div>
            </div>
            <Button
              onClick={handleCheckOut}
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
  );
};

export default Cart;
