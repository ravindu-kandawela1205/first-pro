import React from "react";
import phoneMockup from "../assets/Images/phone.png";
import mockupImg from "../assets/Images/mockup.png";
import Vrman from "../assets/Images/vrman.png";
import Happy from "../assets/Images/happy.png";
import EffectL from "../assets/Images/effect.png";
import EffectM from "../assets/Images/effect_y.png";
import EffectP from "../assets/Images/effect_p.png";


const sections = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    subtitle: "Lorem Ipsum is simply dummy text",
    desc: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications...",
    effect: EffectL,
    mockup: phoneMockup,
    bgColor: "bg-[#08D3BB]",
    imgSide: "right",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    subtitle: "Lorem Ipsum is simply dummy text",
    desc: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications...",
    effect: EffectM,
    mockup: mockupImg,
    bgColor: "bg-cyan-500",
    imgSide: "left",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    subtitle: "Lorem Ipsum is simply dummy text",
    desc: "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications...",
    effect: EffectP,
    mockup: Vrman,
    bgColor: "bg-[#9208D3]",
    imgSide: "right",
  },
];


function Section({ title, subtitle, desc, effect, mockup, bgColor, imgSide }) {
  return (
    <div className="flex items-center justify-center bg-white px-6 py-20 md:py-0 relative">
     
      {effect && (
        <img
          src={effect}
          alt=""
          className={`absolute ${
            imgSide === "right" ? "right-5 hidden lg:block" : "left-10 hidden md:block"
          }`}
        />
      )}

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl items-center">
        
        {imgSide === "left" && (
          <div className="flex justify-center order-2 md:order-first">
            <img
              src={mockup}
              alt="mockup"
              className="w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-2xl"
            />
          </div>
        )}

       
        <div>
          <div className="flex items-center space-x-3 md:gap-[25px]">
            <div
              className={`w-16 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full ${bgColor} text-white`}
            >
              <img src={Happy} alt="" className="h-[20px] w-[20px]" />
            </div>
            <div>
              <h4 className="font-medium text-[#000000] text-[17px]">
                {subtitle}
              </h4>
              <p className="text-[#868686] text-[14px]">{subtitle}</p>
            </div>
          </div>

          <h2 className="mt-[43px] text-2xl md:text-3xl font-semibold text-gray-900 leading-12">
            <span className="text-cyan-600">Lorem Ipsum</span> {title}
          </h2>

          <p className="mt-[56px] text-gray-600 leading-6">{desc}</p>
        </div>

       
        {imgSide === "right" && (
          <div className="flex justify-center">
            <img
              src={mockup}
              alt="mockup"
              className="w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}


export default function List() {
  return (
    <div className="w-full bg-white space-y-20">
      {sections.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </div>
  );
}
