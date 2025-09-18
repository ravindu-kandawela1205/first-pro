import star from '../assets/images/star.png';
import pie from '../assets/images/pie.png';

const SubscribeSection = () => (
  <div className="relative">
      <img
        src={star}
        alt=""
        className="absolute -top-8 left-1/2 -translate-x-[calc(50%+650px)] w-[66px] -rotate-[20.37deg] z-50 max-w-[1440px] mx-auto"
      />
    <section className="bg-sky-50 relative group overflow-hidden h-[500px] flex items-center justify-center font-poppins max-w-[1440px] mx-auto">

      <img
        src={pie}
        alt=""
        className="absolute top-24 left-1/2 -translate-x-[calc(50%-320px)] w-[66px] rotate-[20.37deg] z-50 group-hover:rotate-[360deg] transition-transform duration-[1000ms] hidden md:block"
      />

      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <p className="text-3xl md:text-3xl font-bold text-gray-900 leading-snug mb-10">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <form className="flex flex-row xs:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-5 py-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black text-gray-800 transition shadow-2xl md:w-[532px]"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-black text-red-50 font-normal rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 cursor-pointer uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default SubscribeSection;
