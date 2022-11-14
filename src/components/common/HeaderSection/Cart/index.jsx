import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="flex items-center justify-center cursor-pointer hover:text-secondary transition-colors">
      <Link to={"/cart"} className="relative">
        <AiOutlineShoppingCart size={20} />
        {cartTotalQuantity > 0 && (
          <div className="absolute w-4 h-4 pt-1 -top-2 left-2 text-xs flex items-center justify-center text-white rounded-full bg-secondary ">
            {cartTotalQuantity}
          </div>
        )}
      </Link>
    </div>
  );
};

export default Cart;
