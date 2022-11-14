import React from "react";
import HeroSection from "../HeroSection";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { ImMobile } from "react-icons/im";

const Contact = () => {
  return (
    <div>
      <HeroSection title={"Contacts"} />
      <div className="lg:container mx-auto w-full h-full xl:px-44 px-8">
        <div className="w-full h-[480px] lg:mt-32 md:mt-24 mt-16 lg:mb-24 md:mb-20 mb-14">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=480&amp;hl=en&amp;q=%20+(Baku)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <h2 className="md:text-[27px] text-xl text-primary200 font-semibold mb-5">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-14 gap-y-14 lg:mb-32 md:20 mb-14">
          <div className="col-span-2">
            <form>
              <div className="mb-5">
                <textarea
                  cols="30"
                  rows="10"
                  className="w-full outline-none border border-footerText/50 text-[13px] pl-[18px] pt-3"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="flex gap-6 mb-5">
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full outline-none border border-footerText/50 text-[13px] px-[18px] py-3"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    className="w-full outline-none border border-footerText/50 text-[13px] px-[18px] py-3"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full outline-none border border-footerText/50 text-[13px] px-[18px] py-3"
                    placeholder="Enter subject"
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="uppercase px-8 py-3 text-white bg-secondary rounded"
                >
                  send
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <span className="text-footerText">
                <AiOutlineHome size={30} />
              </span>
              <div>
                <h3 className="font-medium">Buttonwood, California.</h3>
                <p className="text-footerText">Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-footerText">
                <ImMobile size={30} />
              </span>
              <div>
                <h3 className="font-medium">
                  <a href="tel:+1 253 565 2365">+1 253 565 2365</a>
                </h3>
                <p className="text-footerText">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-footerText">
                <AiOutlineMail size={30} />
              </span>
              <div>
                <h3 className="font-medium">
                  <a href="mailto:support@colorlib.com">support@colorlib.com</a>
                </h3>
                <p className="text-footerText">Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
