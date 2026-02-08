import React from "react";
import { MainCaroselData } from "./MainCaroselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarosel = () => {
  const items = MainCaroselData.map((item) => (
    <img
      src={item.image}
      className="cursor-pointer w-screen h-[75vh]"
      role="presentation"
      alt=""
    />
  ));
  return (
    <AliceCarousel
      items={items}
      buttonsDisabled
      dotsDisabled
      autoPlay
      autoPlayInterval={1000}
    />
  );
};

export default MainCarosel;
