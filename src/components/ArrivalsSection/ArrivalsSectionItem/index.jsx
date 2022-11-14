import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../store/cartSlice";
import { useAuth } from "../../../hooks/use-auth";

const ArrivalsSectionItem = ({ item }) => {
  const { id, title, price, image } = item;

  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt="image"
          className="w-full h-full object-cover hover:scale-105 ease-in-out duration-500"
        />
      </div>
      <div className="text-center my-5">
        <h3 className="font-medium text-primary200 md:text-2xl text-xl">
          {isAuth ? (
            <Link
              onClick={() => dispatch(addToCart(item))}
              to={`/product-details/${id}`}
            >
              {title}
            </Link>
          ) : (
            <Link to={"/login"}>{title}</Link>
          )}
        </h3>
        <span className="text-secondary block text-[18px] font-medium">
          $ {price}
        </span>
      </div>
    </div>
  );
};

export default ArrivalsSectionItem;
