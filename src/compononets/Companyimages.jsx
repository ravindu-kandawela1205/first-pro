import Bens from '../assets/beneoshop.png'
import capsico from '../assets/caspio.png'
import HyperGrid from '../assets/HyperGrid.png'
import leotrippi from '../assets/leotrippi.png'

const logos = [
  { path: Bens },
  { path: capsico },
  { path: HyperGrid},
  { path: leotrippi }
]

export default function a() {
  return (
    <div className="w-full bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-lg font-medium text-gray-800">
          You will be in good Company
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 px-4  ">
        {logos.map((item, i) => (
          <div key={i}>
            <img src={item.path} alt="" className=' w-auto h-25 object-contain ' />
          </div>
        ))}
      </div>
    </div>
  )
}
