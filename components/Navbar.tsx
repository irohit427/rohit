'use client'
import { NavLink } from '@/types'
import Link from 'next/link'
import React, { useState } from 'react'
import {RxHamburgerMenu} from "react-icons/rx"



const Navbar = ({ name, links}: {
  name: string,
  links: NavLink[], 
}) => {
    const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <div className='w-10/12 mx-auto py-8 flex items-center justify-between border-b-[2px] border-neutral-200'>
      <div className='sm:text-3xl text-xl font-bold inline-block hover:cursor-pointer hover:scale-[120%] duration-300'>
        <a href="/" className='inline-block'>{name}</a>
      </div>
      <div className='sm:hidden hover:cursor-pointer' onClick={() => setShowNav(!showNav)}>
        <RxHamburgerMenu size={36}/>
      </div>
      <nav className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 ${showNav ? "top-16 visible": "max-sm:invisible top-0"}`}>
          <ul className='flex items-center max-sm:text-sm justify-between max-sm:justify-around'>
            {
              links.map((link) => (
                <li key={link.index}>
                  <Link href={link.url} className='inline-block px-4 py-2 text-lg font-normal hover:font-bold text-gray-300 hover:text-white hover:text-xl duration-350'>
                    {link.title}
                  </Link>
              </li>  
            ))}
          </ul>
      </nav>
    </div>
  )
}

export default Navbar