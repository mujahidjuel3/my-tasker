import React from "react";
import Tasker from "../assets/Image/tasker.png";

const Header = () => {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-start gap-x-4">
        <a href="/">
          <img className="h-[45px]" src={Tasker} alt="" />
        </a>
        <p className=" text-white text-2xl">My Tasker</p>
      </div>
    </nav>
  );
};

export default Header;
