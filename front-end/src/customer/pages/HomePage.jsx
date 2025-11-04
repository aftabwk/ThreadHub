import React from "react";
import MainCarosel from "../components/homeCarosel/MainCarosel";
import SectionCarosel from "../components/homeSectionCarosel/SectionCarosel";
import { mens_kurta } from "../../data/mens_kurta";
const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="py-20  space-y-10 flex flex-col justify-center">
        <SectionCarosel data={mens_kurta} sectionId="Mens-Kurtas" />
        <SectionCarosel data={mens_kurta} sectionId="Mens-Shoes" />
        <SectionCarosel data={mens_kurta} sectionId="Mens-Shirt" />
        <SectionCarosel data={mens_kurta} sectionId="Womens-Sari" />
        <SectionCarosel data={mens_kurta} sectionId="Womens-Dress" />
      </div>
    </div>
  );
};

export default HomePage;
