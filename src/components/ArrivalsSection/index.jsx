import React, { useEffect, useState } from "react";
import ArrivalsSectionItem from "./ArrivalsSectionItem";
import products from "../../data/products";

const ArrivalsSection = () => {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    const filterWatch = products.filter((item) => item.category === "arrivals");
    const sliceWatch = filterWatch.slice(0, 4);
    setArrivals(sliceWatch);
  }, []);

  return (
    <div className="lg:container mx-auto w-full h-full xl:px-44 px-8 lg:pt-[200px] md:pt-[150px] pt-[60px]">
      <h2 className="sm:text-5xl text-3xl font-semibold mb-[70px]">
        New Arrivals
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {arrivals.map((item) => (
          <ArrivalsSectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ArrivalsSection;
