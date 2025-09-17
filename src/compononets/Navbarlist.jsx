import { useState } from "react";
import { Link } from "react-scroll";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "aboutus" },
  { name: "Services", id: "services" },
  { name: "Blog", id: "blog" },
];

export default function Navbarlist() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home"); // track active section

  const renderLinks = (isMobile = false) =>
    menuItems.map((item) => {
      const isActive = activeId === item.id;
      return (
        <li key={item.id} className="relative">
          <Link
            to={item.id}
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            onSetActive={() => setActiveId(item.id)}
            onClick={() => isMobile && setOpen(false)}
            className={`relative block px-2 py-1 cursor-pointer text-[16px] font-poppins font-normal ${
              isActive ? "text-[#1090CB] font-bold" : "text-gray-700"
            }`}
          >
            {item.name}
            {isActive && (
              <span className="absolute -top-0 -left-2 w-2 h-2 bg-green-500 rounded-full"></span>
            )}
          </Link>
        </li>
      );
    });

  const contactButton = (isMobile = false) => (
    <Link
      to="contact"
      smooth={true}
      duration={500}
      offset={-100}
      spy={true}
      onClick={() => isMobile && setOpen(false)}
      className="bg-[#1090CB] text-white text-[13px] cursor-pointer py-3 w-[125px] h-[41px] text-center rounded-[6px] hover:bg-blue-600 font-poppins"
    >
      Contact Us
    </Link>
  );

  return (
    <div className="bg-white shadow w-full h-auto md:h-[102px] fixed top-0 left-0 z-[999]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-2 md:py-6 px-4 md:px-[32px] xl:px-[80px]">
        <div className="font-bold text-[#1090CB] text-[29px] font-poppins">LOGO</div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <ol className="hidden md:flex gap-[71px] items-center">
          {renderLinks()}
          {contactButton()}
        </ol>
      </div>

      {/* Mobile menu */}
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
