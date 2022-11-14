import React from "react";
import { AiFillHeart } from "react-icons/ai";

const CopyRight = () => {
  return (
    <div className="text-copyRightText font-light">
      <p className="tracking-tight">
        Copyright ©2022 All rights reserved | This template is made with{" "}
        <span className="text-secondary">
          <AiFillHeart size={20} className="inline" />
        </span>{" "}
        by <span className="text-secondary">Colorlib</span>
      </p>
    </div>
  );
};

export default CopyRight;
