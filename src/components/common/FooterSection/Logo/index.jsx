import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../../../assets/Logo/logo.png";

const Logo = () => {
  return (
    <div className="flex flex-col gap-10">
      <Link to={"/"}>
        <img src={LogoImg} alt="logo" />
      </Link>
      <p className="text-footerText leading-tight">
        Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do
        eiusmod tem.
      </p>
    </div>
  );
};

export default Logo;
