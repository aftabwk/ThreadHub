import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md border-gray-300 my-2">
      <div className="flex items-center">
        <div className="w-20 h-20 lg:w-36 lg:h-36">
          <img
            className="h-full w-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/6/y/v/m-sksh-dt1105-black-fubar-original-imag4cpwzmhbufg4-bb.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Men Striped Cotton Blend Straight Kurta
          </p>
          <p className="opacity-70">Size: S,Black</p>
          <p className="opacity-70 mt-2">Seller: FUBAR</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-3">
            <p className="font-semibold">230</p>
            <p className="line-through opacity-50">469</p>
            <p className="text-green-600 font-semibold">69% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border border-gray-300 rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
