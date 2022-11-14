import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, getTotals } from "../../store/cartSlice";
import HeroSection from "../HeroSection";
import Table from "./Table";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClearCart = () =>{
    dispatch(clearCart())
    dispatch(getTotals())
  }


  return (
    <div>
      <HeroSection title={"Cart List"} />
      <div className="lg:container mx-auto w-full h-full xl:px-44 px-8 lg:my-52 md:my-40 my-28 ">
        {cartItems.length === 0 ? (
          <h1 className="lg:text-5xl md:text-4xl text-3xl text-center">
            Your cart is empty
          </h1>
        ) : (
          <>
            <div className="w-full overflow-x-auto overflow-y-hidden relative">
              <Table />
            </div>
            <div className="flex justify-end py-5">
              <p className="font-bold text-xl">${cartTotalAmount}</p>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-between mt-5">
              <div>
                <button
                  onClick={handleClearCart}
                  className="px-5 py-3 border border-red-600 text-red-600 rounded"
                >
                  Clear cart
                </button>
              </div>
              <div className="flex md:flex-row flex-col gap-x-3 gap-y-3 sm:mt-0 mt-3">
                <Link
                  to={"/shop"}
                  className="sm:py-[17px] py-[10px] sm:px-[50px] px-[40px] border border-cardBorder bg-cardBorder text-white rounded capitalize text-[15px] hover:bg-transparent hover:text-secondary ease-in-out duration-500"
                >
                  Continue Shopping
                </Link>
                <Link
                  to={"/"}
                  className="sm:py-[17px] py-[10px] sm:px-[50px] px-[40px] border border-cardBorder bg-cardBorder text-white rounded capitalize text-[15px] hover:bg-transparent hover:text-secondary ease-in-out duration-500"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
