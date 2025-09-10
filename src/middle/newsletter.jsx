import React from "react";
import Star from "../assets/star.png";
import pai from "../assets/pai.png";

function Newsletter() {
  return (
    <div className="relative w-full bg-blue-50 py-16 px-4 flex flex-col md:text-left items-center justify-center h-[560px] overflow-visible mt-2">
      <div className="max-w-5xl ">
        <img
          src={Star}
          alt="star"
          className="absolute top-[-30px] left-[167px] w-[66px] h-[66px]"
        />

        <h2 className="leading-12 text-lg md:text-[30px] font-semibold text-gray-800 text-center md:mb-[80px]">
          Lorem Ipsum is simply dummy <br /> text of the printing.
        </h2>

        <div className="flex flex-col md:flex-row gap-[14px] items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="md:w-[532px] md:h-[67px] w-[300px] py-4 px-2 text-gray-700 focus:outline-none rounded-lg shadow-sm bg-white"
          />

          <button className="h-[67px] md:w-[172px] w-[300px] px-4 bg-black text-white font-medium hover:bg-gray-900 rounded-lg shadow-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
