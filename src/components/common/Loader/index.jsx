import React from "react";
import img1 from "../../../assets/Logo/logo.png";

const Loader = () => {
  return (
    <div className="fixed w-full h-screen inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex items-center justify-center">
        <div className="loader"></div>
        <div className="loaderImg">
          <img src={img1} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
