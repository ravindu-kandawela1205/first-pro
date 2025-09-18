import hero from '../assets/images/hero.svg';
import hero2 from '../assets/images/hero2.svg';

const HeroSection = () => (
  <section
    className="relative bg-[url('./assets/images/background.svg')] bg-cover bg-center py-20 overflow-hidden font-poppins" id="home">

    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-auto">
      <img src={hero2} alt="" className='hidden lg:block'/>
    </div>

    <div className="container px-6 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1440px] mx-auto">

      <div className="flex-1 flex justify-center items-center lg:hidden relative">

        <div className="w-90 h-90 bg-red-100 blur-2xl rounded-full bottom-0 left-92 opacity-50 z-0 hidden lg:block"></div>

        <img 
          src={hero}
          alt="" 
          className="w-full max-w-md lg:max-w-lg bottom-[500px] z-50 -mt-50" 
        />
      </div>

      <div className="flex-1 text-center lg:text-left">
        <div className="absolute w-90 h-90 bg-violet-100 blur-2xl rounded-full bottom-90 left-10 opacity-50 z-0"></div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-15 z-50 relative font-poppins">
          Experienced <span className="text-sky-600">mobile and web</span> applications and website builders measuring.
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-[65px] max-w-2xl mx-auto lg:mx-0 font-poppins leading-loose relative">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android &amp; IOS.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a
            href="#"
            className="bg-sky-600 text-white px-6 sm:px-8 py-3 rounded-lg font-normal shadow-lg hover:bg-sky-600 transition-colors duration-200"
          >
            Contact us
          </a>
          <a
            href="#"
            className="bg-white text-sky-600 px-6 sm:px-8 py-3 rounded-lg font-normal border-1 shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            View more
          </a>
        </div>
      </div>

      <div className="flex-1 justify-center items-center hidden lg:block relative">
        <div className="absolute w-90 h-90 bg-yellow-50 blur-2xl top-20 rounded-full left-50 opacity-100 z-0"></div>
        <div className='z-50'>

        <img src={hero} alt="" className="relative w-full max-w-md -top-[30px] lg:max-w-lg" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
