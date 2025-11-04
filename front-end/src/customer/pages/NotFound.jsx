import React from "react";
import { pageNotFound } from "../../assets/assets";

const NotFound = () => {
  return (
    <div className="h-screen w-screen">
      <img className="h-full w-full " src={pageNotFound} alt="" />
    </div>
  );
};

export default NotFound;
