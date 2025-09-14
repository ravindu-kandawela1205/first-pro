import React from "react";
import Man from "../assets/1.png";
import Shape_right from "../assets/shape_right.png";
import Shape_left from "../assets/shape_left.png";

function Body() {
  return (
    <div className="bg-[#1090CB1A]  min-h-[743px] w-full relative ">
      {/* effects */}
       <div className=" absolute bg-yellow-50 rounded-full w-90 h-90 blur-2xl right-80 top-40 z-0
       xl:right-40 lg:right-20 md:right-10 md:block sm:hidden 2xl:right-80 2xl:top-40 2xl:block xl:top-40 xl:block lg:block" ></div>

      <div className=" absolute bg-red-50 rounded-full w-90 h-90 blur-2xl left-0 top-40 z-0 md:right-10  sm:hidden 2xl:right-80 2xl:top-40 2xl:block xl:top-40 xl:block lg:block md:block "></div>
      
      
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 z-0 xl:ml-[90px] xl:pb-[160px] 2xl:ml-[350px]">

     
        <img
          src={Shape_right}
          alt="shape right"
          className="absolute right-0 top hidden lg:block"
        />
        <img
          src={Shape_left}
          alt="shape left"
          className="absolute left-0 -bottom-10 hidden lg:block"
        />

        <div className="flex-1 max-w-lg md:mt-[160px] text-center md:text-left order-2 md:order-1 space-y-[50px] z-50">
          <h1
            className="text-4xl md:text-[32px] font-semibold  p-2
  leading-snug font-poppins "
          >
            Experience <span className="text-[#1090CB]">mobile and web</span>{" "}
            applications and website builders measuring.
          </h1>

          <p
            className="text-[#5C5C5C]  font-normal
 leading-relaxed font-poppins"
          >
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            application developers with dozens of completed projects. We build
            and develop mobile applications for several top platforms, including
            Android & iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-[15px] justify-center md:justify-start">
            <button className="font-poppins bg-[#1090CB] text-white  md:w-[192px] md:h-[51px] py-3 rounded-[10px] font-medium shadow hover:bg-[#0d7ab0] transition sm:w-[150px] sm:h-[50px] sm:py-2">
              Contact Us
            </button>
            <button className="font-poppins border border-[#1090CB] text-[#1090CB] bg-white md:w-[192px] md:h-[51px] py-3  rounded-[10px] font-medium hover:bg-[#e6f7ff] transition sm:w-[150px] sm:h-[50px] sm:py-2">
              View More
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center order-1 md:order-2">
          <img
            src={Man}
            alt="hero illustration"
            className="w-[300px] sm:w-[400px] md:w-[500px] object-contain z-50"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
