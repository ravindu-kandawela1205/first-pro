import phoneMockup from "../assets/Images/phone.png";
import mockupImg from "../assets/Images/mockup.png";
import Vrman from "../assets/Images/vrman.png";
import Happy from "../assets/Images/happy.png";
import EffectL from "../assets/Images/effect.png";
import EffectM from "../assets/Images/effect_y.png";
import EffectP from "../assets/Images/effect_p.png";


const abc=[
    {
        effect:EffectL,
        img:phoneMockup,
        class:'flex items-center space-x-3 md:gap-[25px]',
        colorclass:'bg-[#08D3BB]',
        text1:'Lorem Ipsum is simply dummy text',
        text2:'Lorem Ipsum is simply dummy text',
        text4:'KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.'

    },

        {
        effect:EffectM,
        img:mockupImg,
        class:'flex items-center space-x-3 order-1 md:order-last md:gap-[25px]',
        colorclass:'bg-cyan-500]',
        text1:'Lorem Ipsum is simply dummy text',
        text2:'Lorem Ipsum is simply dummy text',
        text4:'KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.'

    },
        {
        effect:EffectP,
        img:Vrman,
        class:'flex items-center space-x-3 md:gap-[25px]',
        colorclass:'bg-[#9208D3]',
        text1:'Lorem Ipsum is simply dummy text',
        text2:'Lorem Ipsum is simply dummy text',
        text4:'KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.'

    },
]

export default function createcom(){
    return (
        <div>
        {abc.map((item, i) => (
          <div key={i}>
            <div className="mt-6 flex items-center justify-center bg-white px-6 mb-[100px]">
                  <img
                    src={item.effect}
                    alt=""
                    className="absolute right-0 hidden md:hidden lg:block"
                  />
            
                  <div className="max-w-5xl grid md:grid-cols-2 gap-10  items-center">
                    <div>
                      <div className={item.class}>
                        <div className={`w-16 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full ${item.colorclass} text-white`}>
                          <span className="text-2xl">
                            <img src={Happy} alt="" className="h-[20px] w-[20px]" />
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-[#000000] text-[17px]">
                            {item.text1}
                          </h4>
                          <p className="text-[#868686]  font-normal text-sm text-[14px]">
                            {item.text2}
                          </p>
                        </div>
                      </div>
            
                      <h2 className="mt-[43px] text-2xl md:text-3xl font-semibold text-gray-900 leading-12">
                        <span className="text-cyan-600 ">Lorem Ipsum</span> is simply dummy
                        text of the printing.
                      </h2>
            
                      <p className="mt-[56px] text-gray-600 leading-6">
                      {item.text4}
                      </p>
                    </div>
            
                    <div className="flex justify-center">
                      <img
                        src={item.img}
                        alt="Phone mockup"
                        className="w-[300px] md:w-[400px] lg:w-[500px] "
                      />
                    </div>
                  </div>
                </div>
          </div>
        ))}
        </div>
  

    )
}

