import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ProductsDetails from "../pages/ProdutsDetails";
import Shop from "../pages/Shop";
import SignUp from "../pages/SignUp";
import { useAuth } from "../hooks/use-auth";

const Routers = () => {
  const { isAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      {!isAuth && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
        </>
      )}
      {isAuth && (
        <>
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details/:id" element={<ProductsDetails />} />
        </>
      )}
    </Routes>
  );
};

export default Routers;
