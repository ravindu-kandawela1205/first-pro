import bellIcon from "../assets/bellang.png";

export default function CardsSection() {
  return (
    <div className="flex flex-col md:flex-row px-4 justify-center items-center gap-8 md:gap-[25px] py-16 md:py-0 bg-white md:mt-[248px]">
      <div className="relative bg-gray-100 text-white rounded-xl px-6 py-12 text-center shadow-lg  md:w-[550px] md:h-[500px]">
        <h3 className="md:mt-[64px] text-lg md:text-[25px] font-semibold text-gray-900 mx-auto max-w-[400px] break-words">
          Lorem Ipsum is simply span dummy text.
        </h3>

        <p className="mt-4 md:mt-[36px] text-[#545454] font-normal leading-relaxed text-sm md:text-[16px]">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
        <button className="mt-6 md:mt-[40px] px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md transition">
          View More
        </button>
      </div>

      <div className="relative bg-cyan-600 text-white rounded-xl px-6 py-12 text-center shadow-lg  md:w-[550px] md:h-[500px]">
        <img
          src={bellIcon}
          alt="bell"
          className="absolute -top-12 right-6 w-24 h-24 md:w-[120.26px] md:h-[120.26px] transform rotate-12"
        />
        <h3 className="text-lg md:mt-[64px] md:text-[25px] font-semibold  mx-auto max-w-[300px] break-words">
          Lorem Ipsum is simply dummy text.
        </h3>
        <p className="mt-4 md:mt-[36px] text-[#FFFFFF] font-normal leading-relaxed text-sm md:text-[16px]">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
        <button className="mt-6 md:mt-[40px] px-6 py-3 bg-white text-cyan-600 font-medium rounded-md hover:bg-gray-100 transition">
          View More
        </button>
      </div>
    </div>
  );
}
