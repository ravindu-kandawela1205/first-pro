import React from "react";
import phoneMockup from "../assets/phone.png";
import Happy from "../assets/happy.png";
import Effect_l from "../assets/effect.png";
// import Effect_2 from "../assets/effect.png";
export default function divide() {
  return (
    <div className="mt-6 flex items-center justify-center bg-white px-6">
      <img src={Effect_l} alt="" className="absolute right-0 hidden md:block" />

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl items-center">
        <div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#08D3BB] text-white">
              <span className="text-2xl">
                <img src={Happy} alt="" className="h-[20px] w-[20px]" />
              </span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                Lorem Ipsum is simply dummy text
              </h4>
              <p className="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>

          <h2 className="mt-8 text-2xl md:text-3xl font-bold text-gray-900">
            <span className="text-cyan-600">Lorem Ipsum</span> is simply dummy
            text of the printing.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
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
