import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../state/order/Action";
import { updatePayment } from "../../../state/payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTraker from "../order/OrderTraker";
import AddressCard from "../addressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();

  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((store) => store.order);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);
  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId]);
  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation your order have been Placed
        </Alert>
      </div>
      <OrderTraker activeStep={1} />
      <Grid container className="space-y-5 py-5 pt-20">
        {order?.orderItems.map((item) => (
          <Grid
            key={item.id}
            container
            className="shadow-xl rounded-md p-5 w-full"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid size={{ xs: 6 }}>
              <div className="flex items-center">
                <img
                  className="w-20 h-20 object-cover object-top"
                  src={item.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p>{item.product.title}</p>
                  <div className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                  </div>
                  <p>Seller : {item.product.brand}</p>
                  <p>₹ {item.discountedPrice}</p>
                </div>
              </div>
            </Grid>
            <Grid>
              <AddressCard address={order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
