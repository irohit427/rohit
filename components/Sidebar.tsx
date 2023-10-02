import Link from "next/link"
import { navLinks } from "@/constants"

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto shadow-sm">
      <div className="flex flex-col w-full justify-center items-center mt-10">
        {
          navLinks.map((navLink, index) => (
            <div key={index} className="py-4">
              <Link href={navLink.url} className='inline-block px-4 py-2 text-lg font-normal hover:cursor-pointer hover:font-bold
                   text-gray-300 hover:text-coral-red transition ease-in-out hover:scale-110 duration-300'>
                    {navLink.title}
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}