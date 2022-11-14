import React from "react";
import VideoSection from "../../components/VideoSection";
import HeroSection from "../HeroSection";

const About = () => {
  return (
    <div>
      <HeroSection title={"About Us"} />
      <div className="lg:container mx-auto w-full h-full xl:px-44 px-8 lg:mt-48 md:mt-36 mt-32 lg:mb-32 md:mb-24 mb-14">
        <div className="lg:w-[70%] w-full mb-14">
          <h4 className="sm:text-3xl text-2xl font-bold text-primary200 mb-7 before:w-[50px] before:h-[2px] before:bg-secondary/70 before:content-[''] before:inline-block before:mb-2 before:mr-2">
            Our Mission
          </h4>
          <p className="text-footerText mb-4 leading-7">
            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
            labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
            lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
            accumsan lacus.
          </p>
          <p className="text-footerText mb-4 leading-7">
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
            lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
            accumsan.
          </p>
        </div>
        <div className="lg:w-[70%] w-full">
          <h4 className="sm:text-3xl text-2xl font-bold text-primary200 mb-7 before:w-[50px] before:h-[2px] before:bg-secondary/70 before:content-[''] before:inline-block before:mb-2 before:mr-2">
            Our Vision
          </h4>
          <p className="text-footerText mb-4 leading-7">
            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
            labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
            lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
            accumsan lacus.
          </p>
          <p className="text-footerText mb-4 leading-7">
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
            lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
            accumsan.
          </p>
        </div>
      </div>
      <VideoSection/>
    </div>
  );
};

export default About;
