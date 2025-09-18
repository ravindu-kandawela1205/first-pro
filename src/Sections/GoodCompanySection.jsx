import cm1 from '../assets/images/cm1.png';
import cm2 from '../assets/images/cm2.png';
import cm3 from '../assets/images/cm3.png';
import cm4 from '../assets/images/cm4.png';

const GoodCompanySection = () => (
  <section className="bg-white py-20 relative overflow-hidden font-poppins max-w-[1440px] mx-auto" id="blog">
    <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative">
      <div className="max-w-6xl z-10">
        <p className="text-3xl md:text-3xl font-medium text-black leading-tight mb-12">
          You will be in good Company
        </p>

        <div className="absolute w-80 h-80 bg-lime-100 blur-2xl rounded-full -bottom-10 -left-30 opacity-50 z-0"></div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-[115px] justify-items-center md:-space-y-10">
          <img
            src={cm1}
            alt="Company 1"
            className="w-24 md:w-32 lg:w-36"
          />
          <img
            src={cm2}
            alt="Company 2"
            className="w-24 md:w-32 lg:w-36"
          />
          <img
            src={cm3}
            alt="Company 3"
            className="w-24 md:w-32 lg:w-36"
          />
          <img
            src={cm4}
            alt="Company 4"
            className="w-24 md:w-32 lg:w-36"
          />
        </div>
      </div>
    </div>
  </section>
);

export default GoodCompanySection;
