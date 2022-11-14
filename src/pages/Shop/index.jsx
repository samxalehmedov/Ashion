import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection";
import ShopItem from "./ShopItem";
import products from "../../data/products";

const Shop = () => {
  const [watchs, setWatchs] = useState([]);

  useEffect(() => {
    const filterWatch = products.filter((item) => item.category === "watch");
    const sliceWatch = filterWatch.slice(0, 4);
    setWatchs(sliceWatch);
  }, []);

  return (
    <div>
      <HeroSection title={"Shop"} />
      <div className="lg:container mx-auto w-full h-full xl:px-44 px-8 lg:mt-40 md:mt-32 mt-24 lg:mb-32 md:mb-24 mb-14">
        <div className="flex flex-col items-center pb-20">
        <h2 className="text-center lg:text-5xl md:text-4xl text-3xl">Watches</h2>
        <div className="w-[100px] h-[2px] bg-secondary"/>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {watchs.map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
