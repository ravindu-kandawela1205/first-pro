import { useState } from "react";
import { Link } from "react-scroll";

const menuItems = [
  { name: "Home" },
  { name: "About Us" },
  { name: "Services" },
  { name: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseLinkClasses =
    "hover:text-[#1090CB] cursor-pointer text-[16px] font-normal font-poppins";

  const renderLinks = (isMobile = false) =>
    menuItems.map((item, i) => (
      <li key={i} className="relative group">
        <Link
          to={item.name.toLowerCase().replace(/\s+/g, "")}
          smooth={true}
          duration={500}
          offset={-80}
          className={baseLinkClasses}
          onClick={() => isMobile && setOpen(false)}
        >
          <span className="absolute -top-1 -left-2 w-2 h-2 bg-green-500 rounded-full opacity-0 group-active:opacity-100"></span>
          {item.name}
        </Link>
      </li>
    ));

  const contactButton = (isMobile = false) => (
    <Link
      to="contact"
      smooth={true}
      duration={500}
      offset={-80}
      className="bg-[#1090CB] text-white text-[13px] cursor-pointer py-3 w-[125px] h-[41px] text-center rounded-[6px] hover:bg-blue-600 font-poppins"
      onClick={() => isMobile && setOpen(false)}
    >
      Contact Us
    </Link>
  );

  return (
    <div className="bg-white shadow w-full h-[102px] fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-6 px-8 md:px-20">
       
        <div className="font-bold text-[#1090CB] text-[29px] font-poppins">
          LOGO
        </div>

      
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      
        <ol className="hidden md:flex gap-[71px] items-center">
          {renderLinks()}
          {contactButton()}
        </ol>
      </div>

     
      {open && (
        <div className="md:hidden bg-white border-t">
          <ol className="flex flex-col gap-4 py-4 items-center">
            {renderLinks(true)}
            {contactButton(true)}
          </ol>
        </div>
      )}
    </div>
  );
}
