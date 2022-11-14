import React from "react";
import heroImg from "../../assets/HeroSection/watch.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full md:h-auto h-[430px] bg-heroBg overflow-hidden">
      <div className="lg:container mx-auto w-full h-full xl:pl-44 xl:pr-14 px-8">
        <div className="h-full grid md:grid-cols-3">
          <div className="h-full flex flex-col gap-10 justify-center col-span-2">
            <h1 className="xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl text-3xl text-primary200 font-bold leading-tight">
              Select Your New Perfect Style
            </h1>
            <p className="text-[17px] font-normal">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>
            <div>
              <Link
                to={"/shop"}
                className="px-[29px] py-[20px] hover:bg-secondary transition-colors bg-buttonBg text-white font-semibold uppercase"
              >
                Shop now
              </Link>
            </div>
          </div>
          <div className="md:block hidden col-span-1">
            <img src={heroImg} className="heartbeat" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
