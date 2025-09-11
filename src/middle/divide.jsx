import React from "react";
import phoneMockup from "../assets/phone.png";
import Happy from "../assets/happy.png";
import Effect_l from "../assets/effect.png";
import Effect_2 from "../assets/effect.png";
export default function divide() {
  return (
    <div className="mt-6 flex items-center justify-center bg-white px-6 mb-[100px]">
      <img src={Effect_l} alt="" className="absolute right-0 hidden md:hidden lg:block" />

      <div className="max-w-5xl grid md:grid-cols-2 gap-10  items-center">
        <div>
          <div className="flex items-center space-x-3 md:gap-[25px]">
            <div className="w-16 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#08D3BB] text-white">
              <span className="text-2xl">
                <img src={Happy} alt="" className="h-[20px] w-[20px]" />
              </span>
            </div>
            <div>
              <h4 className="font-medium text-[#000000] text-[17px]"> 
                Lorem Ipsum is simply dummy text
              </h4>
              <p className="text-[#868686]  font-normal text-sm text-[14px]">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>

          <h2 className="mt-[43px] text-2xl md:text-3xl font-semibold text-gray-900 leading-12">
            <span className="text-cyan-600 ">Lorem Ipsum</span> is simply dummy
            text of the printing.
          </h2>

          <p className="mt-[56px] text-gray-600 leading-6">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={phoneMockup}
            alt="Phone mockup"
            className="w-[300px] md:w-[400px] lg:w-[500px] "
          />
        </div>
      </div>
    </div>
  );
}
