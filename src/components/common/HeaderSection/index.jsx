import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Links from "./Links";
import Logo from "./Logo";
import MobileLinks from "./MobileLinks";
import Search from "./Search";
import { BsList } from "react-icons/bs";
import "animate.css";
import Login from "./Login";
import Exit from "./Exit";
import { useAuth } from "../../../hooks/use-auth";

const HeaderSection = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const { isAuth } = useAuth();

  useEffect(() => {
    const toggleActive = () => {
      if (window.scrollY > 200) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", toggleActive);

    return () => removeEventListener("scroll", toggleActive);
  });

  return (
    <div
      className={`${
        active ? "sticky animate__fadeInDown" : "block"
      } animate__animated top-0 left-0 w-full h-28 bg-white shadow-md z-50`}
    >
      <header className="lg:container w-full h-full mx-auto lg:px-10 px-2 flex justify-between items-center">
        <Logo />
        <Links />
        <MobileLinks open={open} setOpen={setOpen} />
        <div className="flex justify-between sm:gap-6 gap-4 items-center">
          <Search />
          <Login />
          {isAuth && <Cart />}
          <Exit />
          <div
            onClick={() => setOpen(true)}
            className="md:hidden flex items-center justify-center cursor-pointer"
          >
            <BsList size={33} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;
