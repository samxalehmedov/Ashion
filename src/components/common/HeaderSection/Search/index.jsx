import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const Search = () => {
  const [open, setOpen] = useState(false);

  useEffect(() =>{
    if(open){
      document.body.style.overflowY="hidden"
    }else{
      document.body.style.overflowY="auto"
    }
  }, [open])

  return (
    <>
      {open ? (
        <div className="fixed bg-black inset-0 w-full h-screen z-50">
          <div className="relative top-7 flex justify-center">
            <div
              onClick={() => setOpen(false)}
              className="rounded-full flex items-center justify-center cursor-pointer text-white"
            >
              <AiFillCloseCircle size={50} />
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center -mt-12">
            <input
              type="text"
              className="lg:w-[500px] w-[250px] lg:text-[40px] text-[26px] border-b border-footerText bg-transparent text-footerText outline-none"
              placeholder="Searching key....."
            />
          </div>
        </div>
      ) : null}
      <div
        onClick={() => setOpen(true)}
        className="flex items-center justify-center cursor-pointer hover:text-secondary transition-colors"
      >
        <BsSearch size={18} />
      </div>
    </>
  );
};

export default Search;
