import React from "react";

export default function text() {
  return (
    <div>
      <div className="flex items-center justify-center py-10 px-10 md:py-[115px] md:px-[297px] bg-white   ">
        <div className="text-center max-w-auto gap-[32px] ">
          <h1 className=" text-2xl sm:text-[33px]  text-gray-900 font-semibold">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <p className="mt-[18px] leading-8 text-[#868686] md:text-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-500 text-[18px]">Lorem Ipsum has been the industry's</p>
        </div>
      </div>
    </div>
  );
}
