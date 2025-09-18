import { useState, useEffect } from "react";

const Header = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isManualSelection, setIsManualSelection] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#footer" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll detection if user manually selected a page
      if (isManualSelection) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActivePage(link.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    // Reset manual selection after a delay
    const timer = setTimeout(() => {
      setIsManualSelection(false);
    }, 1000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isManualSelection]);

  const handleLinkClick = (name) => {
    setActivePage(name);
    setIsManualSelection(true);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-[999] font-poppins">
      <div className="container mx-auto px-0 py-4 flex items-center justify-between max-w-[90%]">

        <span className="text-2xl font-bold text-sky-600 cursor-pointer">LOGO</span>

        <div className="hidden md:flex items-center space-x-15 ml-auto">
          <nav className="flex space-x-8 gap-[30px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-gray-600 hover:text-sky-600 font-normal transition-colors duration-200 group ${
                  activePage === link.name ? "text-sky-600" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name);
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span
                  className={`absolute -top-2 -left-2 w-2 h-2 bg-teal-400 rounded-full transition-transform duration-200 ${
                    activePage === link.name
                      ? "scale-100"
                      : "scale-0"
                  }`}
                ></span>
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="bg-sky-600 text-white px-5 py-2 rounded-lg font-normal shadow-md hover:bg-sky-600 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("Contact");
              document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact us
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6 relative z-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-[1000]`}
      >
        <nav className="flex flex-col items-end space-y-6 px-6 py-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg text-gray-600 hover:text-sky-600 font-medium transition-colors duration-200 ${
                activePage === link.name ? "text-sky-600" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.name);
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-sky-600 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("Contact");
              document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;