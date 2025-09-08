import React from "react";
import Happy from "../assets/happy.png";
import mockupImg from "../assets/mockup.png";
import Effect_m from "../assets/effect_y.png";
function dividepink() {
  return (
    <div>
      <div className="min-h-screen flex items-center bg-white px-6">
        <img
          src={Effect_m}
          alt=""
          className="absolute left-80 hidden md:block sm:left-0"
        />
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="flex justify-center">
            <img
              src={mockupImg}
              alt="Stacked mockup"
              className="w-[350px] md:w-[450px] lg:w-[550px] drop-shadow-2xl"
            />
          </div>

          <div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500 text-white">
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
        </div>
      </div>
    </div>
  );
}

export default dividepink;
