import React from "react";
import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";
import Logo from "./Logo";
import Socials from "./Socials";



const FooterSection = () => {
  return (
    <div className="lg:container mx-auto w-full h-full xl:px-44 px-8 md:pb-40 sm:pb-32 pb-20">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <Logo />
        <div>
          <h4 className="text-xl font-medium capitalize mb-8">Quick Links</h4>
          <nav>
            <ul className="grid gap-2">
              <li>
                <Link
                  to={"/about"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Offers & Discounts
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Get Coupon
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="text-xl font-medium capitalize mb-8">New Products</h4>
          <nav>
            <ul className="grid gap-2">
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Woman Cloth
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Fashion Accessories
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Man Accessories
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Rubber made Toys
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="text-xl font-medium capitalize mb-8">Support</h4>
          <nav>
            <ul className="grid gap-2">
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-footerText font-light hover:text-secondary hover:pl-1 transition-all ease-in-out duration-500"
                >
                  Report a Payment Issue
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-14">
        <CopyRight />
        <Socials />
      </div>
    </div>
  );
};

export default FooterSection;
