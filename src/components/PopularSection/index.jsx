import React, { useEffect, useState } from "react";
import PopularSectionItem from "./PopularSectionItem";
import products from "../../data/products";

const PopularSection = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() =>{
    const filterWatch = products.filter((item) => item.category === "watch");
    const sliceWatch = filterWatch.slice(0,4);
    setPopular(sliceWatch)
  }, [])

  return (
    <div className="lg:container mx-auto w-full h-full xl:px-44 px-8">
      <div className="md:w-[70%] mx-auto w-full text-center mb-[70px]">
        <h2 className="sm:text-5xl text-3xl font-semibold mb-3">
          Popular Items
        </h2>
        <p className="text-textGray mb-[15px]">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

     {
      popular.map(item =>(
        <PopularSectionItem key={item.id} item={item}/>
      ))
     }
      </div>
    </div>
  );
};

export default PopularSection;
