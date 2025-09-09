import React from "react";
import Man from "../assets/1.png";
import Shape_right from "../assets/shape_right.png";
import Shape_left from "../assets/shape_left.png";

function Body() {
  return (
    <div className="bg-[#F5FAFF] w-full relative">
      <div className="max-w-6xl mx-auto flex flex-col   md:flex-row items-center justify-between px-6 md:px-12 py-1">
        <img
          src={Shape_right}
          alt=""
          className="absolute right-0 hidden md:hidden lg:block"
        />
        <img
          src={Shape_left}
          alt=""
          className="absolute left-0 -bottom-6 hidden md:hidden lg:block"
        />
        <div className="borderflex-1 max-w-lg space-y-4 text-center md:text-left py-4 order-2 md:order-first lg:order-first ">
          <h1 className="text-4xl md:text-[36px] font-bold leading-snug">
            <span className="text-[#1090CB]">mobile and web</span> applications
            and website builders measuring.
          </h1>

          <p className="text-gray-600">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders with dozens of completed projects.
            We build and develop mobile applications for several top platforms,
            including Android & iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#1090CB] text-white px-12 py-2 rounded-lg font-medium shadow hover:bg-[#0d7ab0] transition">
              Contact us
            </button>
            <button className="border border-[#1090CB] text-[#1090CB] px-12 py-2 rounded-lg font-medium hover:bg-[#e6f7ff] transition">
              View more
            </button>
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center order-1 md:order-last lg:order-last">
          <img
            src={Man}
            alt=""
            className="w-[300px] sm:w-[400px] md:w-auto object-contain  md:h-auto -mt-30"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
