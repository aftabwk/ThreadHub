import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage";
import Cart from "../customer/components/cart/Cart";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/footer/Footer";
import Product from "../customer/components/product/Product";
import ProductDetails from "../customer/components/productDetails/ProductDetails";
import Checkout from "../customer/components/checkout/Checkout";
import Order from "../customer/components/order/Order";
import OrderDetail from "../customer/components/order/OrderDetail";
import NotFound from "../customer/pages/NotFound";
import PaymentSuccess from "../customer/components/payment/PaymentSuccess";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path=":levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="account/order" element={<Order />} />
        <Route path="account/order/:orderId" element={<OrderDetail />} />
        <Route path="payment/:orderId" element={<PaymentSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
