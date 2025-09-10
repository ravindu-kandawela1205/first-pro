import bellIcon from "../assets/bellang.png";

export default function CardsSection() {
  return (
    <div className="flex flex-col md:flex-row px-4 justify-center items-center gap-8 py-16 bg-white ">
      <div className="relative bg-gray-100 rounded-xl px-6 py-18 max-w-md text-center shadow-sm ">
        <h3 className="text-lg font-bold text-gray-900">
          Lorem Ipsum is simply span dummy text.
        </h3>
        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed 
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
        <button className="mt-6 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md transition">
          View More
        </button>
      </div>

      <div className="relative bg-cyan-600 text-white rounded-xl px-6 py-18 max-w-md text-center shadow-lg">
        <img
          src={bellIcon}
          alt="bell"
          className="absolute -top-10 right-6 w-16 h-16 transform rotate-12"
        />

        <h3 className="text-lg font-bold">Lorem Ipsum is simply dummy text.</h3>
        <p className="mt-4 text-cyan-100 leading-relaxed text-sm">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-cyan-600 font-medium rounded-md hover:bg-gray-100 transition">
          View More
        </button>
      </div>
    </div>
  );
}
