import Web from "../assets/website-content 1.png";
import Seo from "../assets/seo-tag 1.png";
import Imme from "../assets/immersive 1.png";
import Code from "../assets/coding (1) 1.png";

const services = [
  {
    title: "Web Application",
    desc: "Lorem Ipsum is simply",
    icon: Web,
    bg: "bg-purple-100",
    text: "text-purple-600 md:size-[20px]  ",
  },
  {
    title: "SEO",
    desc: "Lorem Ipsum is simply",
    icon: Seo,
    bg: "bg-[#ECFFDA]",
    text: "text-green-600 md:size-[20px] ",
  },
  {
    title: "AR/VR Solutions",
    desc: "Lorem Ipsum is simply",
    icon: Imme,
    bg: "bg-blue-100",
    text: " text-blue-600 md:size-[20px] ",
  },
  {
    title: "Mobile Applications",
    desc: "Lorem Ipsum is simply",
    icon: Code,
    bg: "bg-red-100",
    text: "text-red-600 md:size-[20px] ",
  },
];

export default function Services() {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-[16px] px-6 ">
        {services.map((service, i) => (
          <div key={i} className="flex items-start gap-4">
            <div
              className={`w-16 h-16 md:h-[83px] md:w-[83px] flex items-center justify-center rounded-xl ${service.bg}`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className={`w-10 h-10 md:w-[41px] md:h-[41px] ${service.text}`}
              />
            </div>

            <div>
              <h3 className="text-[10px] md:text-[15px] font-medium font-poppins">
                {service.title}
              </h3>
              <p
                className="text-gray-500 font-normal
 md:text-[15px] font-poppins"
              >
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
