import Bens from '../assets/beneoshop.png'
import capsico from '../assets/caspio.png'
import HyperGrid from '../assets/HyperGrid.png'
import leotrippi from '../assets/leotrippi.png'

const logos = [
  { path: Bens, class: 'h-[185px] w-[185px] object-contain' },
  { path: capsico, class: 'h-[185px] w-[185px] object-contain' },
  { path: HyperGrid, class: 'h-[185px] w-[185px] object-contain' },
  { path: leotrippi, class: 'h-[185px] w-[185px] object-contain' }
]

export default function a() {
  return (
    <div className="w-full bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-lg font-medium text-gray-800">
          You will be in good Company
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 px-4">
        {logos.map((item, i) => (
          <div key={i}>
            <img src={item.path} alt="" className={item.class} />
          </div>
        ))}
      </div>
    </div>
  )
}
