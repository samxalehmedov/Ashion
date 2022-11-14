import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { addToCart, getTotals } from "../../../store/cartSlice";
import { useAuth } from "../../../hooks/use-auth";

const ShopItem = ({ item }) => {
  const { id, title, image, price } = item;
  const dispatch = useDispatch();

  const { isAuth } = useAuth();

  const navigate = useNavigate();

  const handleAddCart = () => {
    if (isAuth) {
      dispatch(addToCart(item));
      dispatch(getTotals());
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div>
        <div className="relative w-full group overflow-hidden border-b-[3px] border-secondary">
          <img
            src={image}
            alt="image"
            className="w-full h-full object-cover ease-in-out duration-300"
          />
          <div className="absolute bottom-0 w-full flex text-center mb-[1px] group-hover:opacity-100 ease-in-out duration-500 group-hover:translate-y-0 translate-y-20 opacity-0">
            <button
              onClick={handleAddCart}
              className="w-full bg-secondary text-white py-5"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="text-center my-5">
          <h3 className="font-medium text-primary200 md:text-2xl text-xl">
            {isAuth ? (
              <Link onClick={handleAddCart} to={`/product-details/${id}`}>
                {title}
              </Link>
            ) : (
              <Link to={"/login"}>{title}</Link>
            )}
          </h3>
          <span className="block text-[18px] font-medium">$ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
