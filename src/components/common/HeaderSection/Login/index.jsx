import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center cursor-pointer hover:text-secondary transition-colors">
      <Link to={"login"}>
        <AiOutlineUser size={20} />
      </Link>
    </div>
  );
};

export default Login;
