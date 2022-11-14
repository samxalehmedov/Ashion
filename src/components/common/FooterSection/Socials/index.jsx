import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex md:justify-end">
      <div className="flex items-center gap-2">
        <Link
          to={"/"}
          className="footerLink hover:text-secondary ease-in-out duration-500 p-2"
        >
          <BsTwitter />
        </Link>
        <Link
          to={"/"}
          className="footerLink hover:text-secondary ease-in-out duration-500 p-2"
        >
          <FaFacebookF />
        </Link>
        <Link
          to={"/"}
          className="footerLink hover:text-secondary ease-in-out duration-500 p-2"
        >
          <AiOutlineGlobal />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
