import { useState } from "react";
import { Link } from "react-scroll";

const xyz = [
  { name: "Home", class: "hover:text-[#1090CB] cursor-pointer" },
  { name: "About Us", class: "hover:text-[#1090CB] cursor-pointer" },
  { name: "Services", class: "hover:text-[#1090CB] cursor-pointer" },
  { name: "Blog", class: "hover:text-[#1090CB] cursor-pointer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-8 md:px-20">
        <div className="font-bold text-[#1090CB] text-3xl font-poppins">
          LOGO
        </div>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ol className="hidden md:flex gap-10 items-center">
          {xyz.map((item, i) => (
            <li key={i} className="relative group font-poppins">
              <Link
                to={item.name.toLowerCase().replace(" ", "")}
                smooth={true}
                duration={500}
                offset={-80}
                className={item.class}
              >
                <span className="absolute -top-1 -left-2 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100"></span>
                {item.name}
              </Link>
            </li>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-[#1090CB] text-white text-[13px] cursor-pointer py-2 px-4 rounded-[6px] hover:bg-blue-600"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
        </ol>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <ol className="flex flex-col gap-4 py-4 items-center">
            {xyz.map((item, i) => (
              <li key={i} className="relative group font-poppins">
                <Link
                  to={item.name.toLowerCase().replace(" ", "")}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={item.class}
                  onClick={() => setOpen(false)}
                >
                  <span className="absolute -top-1 -left-2 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100"></span>
                  {item.name}
                </Link>
              </li>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="font-poppins bg-[#1090CB] text-white text-[13px] cursor-pointer py-2 px-4 rounded-[6px] hover:bg-blue-600"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </ol>
        </div>
      )}
    </div>
  );
}
