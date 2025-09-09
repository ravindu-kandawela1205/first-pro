import React from "react";
import Vrman from "../assets/vrman.png";
import Happy from "../assets/happy.png";
import Effect_p from "../assets/effect_p.png";

function dividelast() {
  return (
    
        <div className="mt-6 flex items-center justify-center bg-white px-6  ">
          <img
            src={Effect_p}
            alt=""
            className="absolute right-5 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block"
          />
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl items-center">
            <div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9208D3] text-white">
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
                <span className="text-cyan-600">Lorem Ipsum</span> is simply
                dummy text of the printing.
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={Vrman}
                alt="Phone mockup"
                className="w-[300px] md:w-[400px] lg:w-[500px] "
              />
            </div>
          </div>
        </div>
   
  );
}

export default dividelast;
