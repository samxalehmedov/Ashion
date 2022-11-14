import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { addToCart, decreaseCart, getTotals } from "../../../store/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const { cartQuantity, image, price, title, desc } = product;

  useEffect(() => {
    dispatch(getTotals())
  }, [product]);

  return (
    <div className="lg:container mx-auto w-full h-full xl:px-44 px-8 lg:mt-36 md:mt-28 mt-20">
      <div className="w-full lg:h-[800px] md:h-[600px] h-[400px]">
        <img src={image} className="w-full h-full object-cover" alt="image" />
      </div>
      <div className="lg:mt-24 md:mt-20 mt-14 lg:mb-52 md:mb-44 mb-32">
        <div className="md:w-[50%] w-full mx-auto text-center">
          <h3 className="lg:text-[40px] md:text-3xl text-2xl text-primary200 font-medium">
            {title}
          </h3>
          <p className="lg:mt-12 md:mt-8 mt-5 text-footerText leading-7">
            {desc}
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 lg:mt-14 mt-8">
          <p className="text-footerText">Quantity</p>
          <div className="flex items-center">
            <button
              disabled={cartQuantity === 1}
              onClick={() => dispatch(decreaseCart(product))}
              className={`${cartQuantity === 1 ? "opacity-50" : "opacity-100"} w-[50px] h-[50px] border border-footerText text-footerText text-3xl font-light flex items-center justify-center text-center`}
            >
              <FiMinus size={20} />
            </button>
            <span
              className="w-[50px] h-[50px] border border-footerText flex items-center justify-center text-center outline-none bg-heroBg"
              name="quantity"
            >
              {cartQuantity}
            </span>
            <button
              onClick={() => dispatch(addToCart(product))}
              className={`w-[50px] h-[50px] border border-footerText text-footerText text-3xl font-light flex items-center justify-center text-center`}
            >
              <FiPlus size={20} />
            </button>
          </div>
          <p className="text-footerText">${price * cartQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
