import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { useAuth } from "../../../../hooks/use-auth";
import { removeUser } from "../../../../store/userSlice";

const Exit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  const handleExit = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    isAuth && (
      <div className="flex items-center justify-center cursor-pointer hover:text-secondary transition-colors">
        <span onClick={handleExit}>
          <ImExit size={18} />
        </span>
      </div>
    )
  );
};

export default Exit;
