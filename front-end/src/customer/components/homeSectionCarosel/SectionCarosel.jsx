import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import HomeCard from "../homeCards/HomeCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";

// 1. Receive BOTH 'data' and 'sectionId' here
const SectionCarousel = ({ data, sectionId }) => {
  const items = data.slice(0, 10).map((item) => (
    <SwiperSlide key={item.id}>
      <div className="p-2">
        <HomeCard product={item} />
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="px-4 lg:px-8">
      <h1 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionId}
      </h1>
      <div className="relative p-5">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            720: { slidesPerView: 3 },
            1024: { slidesPerView: 5.1 },
          }}
          // 2. Use the sectionId to create unique selectors
          navigation={{
            nextEl: `.my-swiper-next-${sectionId}`,
            prevEl: `.my-swiper-prev-${sectionId}`,
          }}
        >
          {items}
        </Swiper>

        {/* 3. Add the unique sectionId to the button's className */}
        <Button
          className={`my-swiper-prev-${sectionId} z-50`}
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
            "&.swiper-button-disabled": {
              display: "none",
            },
          }}
          aria-label="previous"
        >
          <ArrowBackIosIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>

        {/* 4. Add the unique sectionId to the button's className */}
        <Button
          className={`my-swiper-next-${sectionId} z-50`}
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
            "&.swiper-button-disabled": {
              display: "none",
            },
          }}
          aria-label="next"
        >
          <ArrowBackIosIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default SectionCarousel;
