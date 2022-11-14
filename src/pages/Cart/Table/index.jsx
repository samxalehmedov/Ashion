import React, { useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../../store/cartSlice";

const Table = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleDecreaseItem = (item) =>{
    dispatch(decreaseCart(item))
    dispatch(getTotals());
  }

  const handleAdItem = (item) =>{
    dispatch(addToCart(item))
    dispatch(getTotals())
  }

  const handleRemove = (item) =>{
    dispatch(removeFromCart(item))
    dispatch(getTotals())
  }


  return (
    <table className="w-full text-footerText table-auto text-sm">
      <thead className="border-b-2 border-footerText/20 h-10 whitespace-nowrap">
        <tr className="text-left">
          <th className="font-light py-4 px-6">Product</th>
          <th className="font-light py-4 px-6">Price</th>
          <th className="font-light py-4 px-6">Quantity</th>
          <th className="font-light py-4 px-6">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr className="border-b" key={item.id}>
            <td className="font-medium md:flex items-center md:m-5 m-2">
              <img
                src={item.image}
                className="border border-footerText/20 w-40 md:mt-0 mt-2"
                alt="image"
              />
              <div className="md:ml-5 mb-5 md:mb-0">
                <p className="md:text-base text-sm md:py-0 py-5 md:whitespace-normal whitespace-nowrap">
                  {item.title}
                </p>
                <button
                  onClick={() => handleRemove(item)}
                  className="text-red-600 mt-2 border border-red-600 rounded-md px-3 py-2"
                >
                  Remove
                </button>
              </div>
            </td>
            <td className="py-4 px-6">${item.price}</td>
            <td className="py-4 px-6">
              <div className="flex">
                <span className="w-[50px] h-[50px] border border-footerText flex items-center justify-center text-center outline-none bg-heroBg">
                  {item.cartQuantity}
                </span>
                <div>
                  <button
                    onClick={() => handleAdItem(item)}
                    className={`w-[25px] h-[25px] border border-footerText text-footerText font-light flex items-center justify-center text-center`}
                  >
                    <FiPlus />
                  </button>
                  <button
                    onClick={() =>handleDecreaseItem(item)}
                    className={`w-[25px] h-[25px] border border-footerText text-footerText font-light flex items-center justify-center text-center`}
                  >
                    <FiMinus />
                  </button>
                </div>
              </div>
            </td>
            <td className="py-4 px-6">${item.cartQuantity * item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
