import React from "react";
import AddressCard from "../addressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetail = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="p-5 shadow-lg space-y-6">
        <h1 className="text-xl font-bold">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>

      <div className="space-y-5">
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid
            container
            className="shadow-xl rounded-md p-5 border border-gray-300"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid size={{ xs: 6 }}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-20 h-20 object-cover object-top"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/6/y/v/m-sksh-dt1105-black-fubar-original-imag4cpwzmhbufg4-bb.jpeg?q=70"
                  alt=""
                />
                <div className="space-x-2 ml-5">
                  <p className="font-semibold">
                    Men Striped Cotton Blend Straight Kurta
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: Black</span>
                    <span>Size: M</span>
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    Seller: FUBAR
                  </p>
                  <p>₹1648</p>
                </div>
              </div>
            </Grid>

            <Grid size={{}}>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default OrderDetail;
