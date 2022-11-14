import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection";
import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);


  useEffect(() => {
    cartItems.map((item) => {
      if(item.id === id){
        setProduct(item)
      }
    });
  }, [cartItems]);

  return (
    <div>
      <HeroSection title={"Watch Shop"} />
      <ProductItem product={product} />
    </div>
  );
};

export default ProductsDetails;
