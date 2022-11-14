import React, { useEffect, useState } from "react";
import Routers from "../../routes/Routes";
import FooterSection from "../common/FooterSection";
import HeaderSection from "../common/HeaderSection";
import TopButton from "../TopButton";
import { useLocation } from "react-router-dom";
import Loader from "../common/Loader";

const Layout = () => {
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
    if (show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [show]);

  return (
    <div>
      <HeaderSection />
      <Routers />
      <TopButton />
      {show && <Loader />}
      <FooterSection />
    </div>
  );
};

export default Layout;
