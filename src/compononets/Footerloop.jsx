import facebook from "../assets/facbook.png";
import twiiter from "../assets/twiiter.png";
import linkdin from "../assets/linkdin.png";
import Insta from "../assets/insta.png";

const socail = [
  {
    path: facebook,
  },

  {
    path: Insta,
  },

  {
    path: twiiter,
  },

  {
    path: linkdin,
  },
];

export default function socialmedia() {
  return (
  
    <footer className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-0 md:mt-[87px] md:mb-[53px] grid grid-cols-1 md:grid-cols-4  leading-10 gap-2 md:gap-[50px] ">
        <div className="w-full text-center md:text-left">
          <h2 className="text-blue-700 font-bold text-lg mb-3 mt-2">LOGO</h2>
          <p className="text-gray-600 text-sm mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-800 text-sm">@Lorem</p>
        </div>

        <div className="w-full text-center md:text-left">
          <h3 className="font-semibold text-gray-800 mb-3">About us</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Lorem</li>
            <li>Portfolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="w-full text-center md:text-left">
          <h3 className="font-semibold text-gray-800 mb-3">Contact us</h3>
          <p className="text-gray-600 text-sm mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-800 text-sm font-medium">+908 89097 890</p>
        </div>
<div className="flex items-center justify-center md:justify-end -space-x-2 md:-space-x-4 mt-[30px] md:mt-[100px]">
  {socail.map((sc, i) => (
    <img
      key={i}
      src={sc.path}
      alt=""
      className="w-20 h-20 md:w-[60px] md:h-[60px]  justify-center flex-shrink-0 hover:scale-120 transition-transform duration-300"
    />
  ))}
</div>

      </div>

      <div className="border-t border-gray-200 text-center py-4">
        <p className="text-[#686868] font-normal text-[13px]">
          Copyright © 2021 Lorem All rights Reserved
        </p>
      </div>
    </footer>
  );
}
