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
  },
  {
    title: "SEO",
    desc: "Lorem Ipsum is simply",
    icon: Seo,
    bg: "bg-[#ECFFDA]",
  },
  {
    title: "AR/VR Solutions",
    desc: "Lorem Ipsum is simply",
    icon: Imme,
    bg: "bg-blue-100",
  },
  {
    title: "Mobile Applications",
    desc: "Lorem Ipsum is simply",
    icon: Code,
    bg: "bg-red-100",
  },
];

export default function Services() {
  return (
    <div className="w-full py-10 md:py-[43px] md:px-[123px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex items-center gap-[31px]"
          >
            {/* Icon */}
            <div
              className={`w-[70px] h-[70px] flex items-center justify-center rounded-2xl ${service.bg}`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-9 h-9"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-[16px] font-medium font-poppins text-[#000000]">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[13px] font-poppins">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
