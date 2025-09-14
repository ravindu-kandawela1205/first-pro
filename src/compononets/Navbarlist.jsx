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
  const [active, setActive] = useState("home"); // default active

  const baseLinkClasses =
    "cursor-pointer text-[16px] font-normal font-poppins hover:text-[#1090CB]";

  const activeLinkClasses =
    "text-[#1090CB] font-normal"; 

  const renderLinks = (isMobile = false) =>
    menuItems.map((item, i) => {
      const linkId = item.name.toLowerCase().replace(/\s+/g, "");
      const isActive = active === linkId;

      return (
        <li key={i} className="relative group">
          <Link
            to={linkId}
            smooth={true}
            duration={500}
            offset={-80}
            className={`${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`}
            onClick={() => {
              setActive(linkId);
              if (isMobile) setOpen(false);
            }}
          >
            <span
              className={`absolute -top-1 -left-2 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 ${
                isActive ? "opacity-100" : ""
              }`}
            ></span>
            {item.name}
          </Link>
        </li>
      );
    });

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
    <div className="bg-white shadow w-full h-auto md:h-[102px] fixed top-0 left-0 z-[999]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-2 md:py-6 px-8 md:px-20">
        <div className="font-bold text-[#1090CB] text-[29px] font-poppins">LOGO</div>

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
