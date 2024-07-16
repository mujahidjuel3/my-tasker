import React from "react";
import Image from "../assets/Image/tasker.png";

const Hero = () => {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="w-[326px] h-[290px] max-md:w-full"
              src={Image}
              alt=""
            />
          </div>
          <div>
            <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
              Tasker
            </h1>  
            <p className="text-lg my-2 opacity-60">
              Effortlessy Organize, Prioritize, and Conquer Task with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
