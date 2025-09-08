import React from "react";
import Star from "../assets/star.png";
import pai from "../assets/pai.png";

function newsletter() {
  return (
    <div>
      <div className="relative w-full bg-blue-50 py-16 px-4 flex flex-col md:text-left items-center justify-center h-[560px] overflow-visible mt-2 ">
        <img
          src={Star}
          alt="star"
          className="absolute top-[-30px] space-y-1 left-[167px] w-[66px] h-[66px]"
        />

        {/* <img
        src={pai}
        alt="c mark"
        className="absolute top-40 left-[1200px] w-14 h-14 hidden md:block sm:hidden"
      /> */}

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
          Lorem Ipsum is simply dummy <br /> text of the printing.
        </h2>

        <div className="flex w-full max-w-md bg-white rounded-lg overflow-hidden shadow-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-900">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default newsletter;
