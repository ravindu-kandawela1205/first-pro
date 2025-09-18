const Footer = () => {
  return (
    <footer className=" bg-white text-gray-800 font-poppins max-w-[1440px] mx-auto ">
      <div className="container mx-auto items-center px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[78px] text-center md:text-left">
          
          {/* Column 1: Logo */}
          <div>
            <h2 className="text-2xl font-bold text-sky-600 mb-4">LOGO</h2>
            <p className="text-gray-600 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-gray-500 mt-[25px]">@Lorem</p>
          </div>

          {/* Column 2: About us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About us</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-gray-400">Lorem</li>
              <li className="cursor-pointer hover:text-gray-400">Portfolio</li>
              <li className="cursor-pointer hover:text-gray-400">Careers</li>
              <li className="cursor-pointer hover:text-gray-400">Contact us</li>
            </ul>
          </div>

          {/* Column 3: Contact us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact us</h3>
            <p className="text-gray-600 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-gray-600 mt-[11px]">+908 89097 890</p>
          </div>

          {/* Column 4: Social Icons at bottom */}
          <div className="flex flex-col justify-end gap-4">
            <div className="flex justify-center md:justify-start gap-4 ">
              <a
  href="#"
  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg"
>
  <i className="fa-brands fa-facebook-f"></i>
</a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        <p>Copyright ©2021 Lorem All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
