import { useState } from "react"

const xyz = [
  { name: "Home", class: "hover:text-[#1090CB] cursor-pointer" },
  { name: "About Us", class: "hover:text-[#1090CB] cursor-pointer" },
  { name: "Services", class: "hover:text-[#1090CB] cursor-pointer" },
  { name: "Blog", class: "hover:text-[#1090CB] cursor-pointer" }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white shadow w-full md:w-full">
      <div className="flex justify-between items-center py-4 px-6 md:px-20">
       
        <div className="font-bold text-[#1090CB] text-3xl font-poppins">LOGO</div>

       
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

       
        <ol className="hidden md:flex gap-10 items-center">
          {xyz.map((item, i) => (
            <li key={i} className={item.class}>
              {item.name}
            </li>
          ))}
          <button className="bg-[#1090CB] text-white text-[13px] cursor-pointer py-2 px-4 rounded-[6px] hover:bg-blue-600">
            Contact Us
          </button>
        </ol>
      </div>

      
      {open && (
        <div className="md:hidden bg-white border-t">
          <ol className="flex flex-col gap-4 py-4 items-center">
            {xyz.map((item, i) => (
              <li key={i} className={item.class}>
                {item.name}
              </li>
            ))}
            <button className="bg-[#1090CB] text-white text-[13px] cursor-pointer py-2 px-4 rounded-[6px] hover:bg-blue-600">
              Contact Us
            </button>
          </ol>
        </div>
      )}
    </div>
  )
}
