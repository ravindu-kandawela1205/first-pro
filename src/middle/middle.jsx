import Web from "../assets/website-content 1.png";
import Seo from "../assets/seo-tag 1.png";
import Imme from "../assets/immersive 1.png";
import Code from "../assets/coding (1) 1.png";

const services = [
  {
    title: "Web Application",
    desc: "Lorem Ipsum is simply",
    icon: Web, // image path
    bg: "bg-purple-100",
    text: "text-purple-600 ",
  },
  {
    title: "SEO",
    desc: "Lorem Ipsum is simply",
    icon: Seo,
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    title: "AR/VR Solutions",
    desc: "Lorem Ipsum is simply",
    icon: Imme,
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    title: "Mobile Applications",
    desc: "Lorem Ipsum is simply",
    icon: Code,
    bg: "bg-red-100",
    text: "text-red-600",
  },
];

export default function Services() {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 ">
        {services.map((service, i) => (
          <div key={i} className="flex items-start gap-4">
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-xl ${service.bg}`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className={`w-10 h-10 ${service.text}`}
              />
            </div>

            <div>
              <h3 className="font-semibold text-[10px] md:text-[20px] font-poppins">{service.title}</h3>
              <p className="text-gray-500 md:text-[15px] font-poppins">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
