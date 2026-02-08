import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../state/cart/Action";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const product = item.product;
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };
  const handleUpdateCartItem = (num) => {
    const updatedQuantity = item.quantity + num;

    // Ensure quantity doesn't go below 1
    if (updatedQuantity < 1) return;

    const data = {
      cartItemId: item.id,
      data: {
        id: item.id,
        cart: item.cart, // optional, backend ignores if you have @JsonIgnore
        product: item.product, // ✅ include full product
        size: item.size,
        quantity: updatedQuantity,
        price: item.price,
        discountedPrice: item.discountedPrice,
        userId: item.userId,
      },
    };

    dispatch(updateCartItem(data));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md border-gray-300 my-2">
      <div className="flex items-center">
        <div className="w-20 h-20 lg:w-36 lg:h-36">
          <img
            className="h-full w-full object-cover object-top"
            src={product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{product.title}</p>
          <p className="opacity-70">
            Size:{item.size},{product.color}
          </p>
          <p className="opacity-70 mt-2">Seller: {product.brand}</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-3">
            <p className="font-semibold">₹{product.discountedPrice}</p>
            <p className="line-through opacity-50">₹{product.price}</p>
            <p className="text-green-600 font-semibold">
              {product.discountPercent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item.quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border border-gray-300 rounded-sm">
            {item.quantity}
          </span>
          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            sx={{ color: "RGB(145 85 253)" }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button
            onClick={handleRemoveCartItem}
            sx={{ color: "RGB(145 85 253)" }}
          >
            remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
