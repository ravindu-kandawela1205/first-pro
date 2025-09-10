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
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 leading-10">
        <div>
          <h2 className="text-blue-700 font-bold text-lg mb-3">LOGO</h2>
          <p className="text-gray-600 text-sm mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-800 text-sm">@Lorem</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-3">About us</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li> Lorem </li>
            <li> Portfolio </li>
            <li> Careers </li>
            <li> Contact us </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Contact us</h3>
          <p className="text-gray-600 text-sm mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-gray-800 text-sm font-medium">+908 89097 890</p>
        </div>

        <div className="flex items-center justify-center md:justify-end  mt-30 gap-[16px]">
          {socail.map((sc, i) => (
            <div key={i}>
              <img
                src={sc.path}
                alt=""
                className="w-auto h-25 object-contain"
              />
            </div>
          ))}

          {/* <img src={facebook} alt="Facebook" className="w-[34px] h-[34px]" />
               
                   <img src={Insta} alt="Instagram" className="w-[34px] h-[34px]" />
               
                   <img src={twiiter} alt="Twitter" className="w-[34px] h-[34px]" />
                
                   <img src={linkdin} alt="LinkedIn" className="w-[34px] h-[34px]" /> */}
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-4">
        <p className="text-gray-500 text-[13px]">
          Copyright © 2021 Lorem All rights Reserved
        </p>
      </div>
    </footer>
  );
}
