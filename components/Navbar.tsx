'use client'
import { NavLink } from '@/types'
import Link from 'next/link'
import React, { useState } from 'react'
import { ThemeToggler } from './ThemeToggler'

const Navbar = ({ name, links}: {
  name: string,
  links: NavLink[], 
}) => {
    const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <div className='w-10/12 mx-auto py-4 flex items-center justify-between border-b-[2px] border-neutral-200'>
      <div className='sm:text-3xl text-xl font-bold inline-block hover:cursor-pointer hover:scale-[120%] duration-300'>
        <a href="/" className='inline-block'>&lt;<span className='text-coral-red'>{name}</span>&#8725;&gt;</a>
      </div>
      <nav className={`flex items-center justify-center max-md:absolute max-md:w-full left-0 transition ease-in duration-300 ${showNav ? "top-[70px] visible": "max-md:invisible top-0"}`}>
          <ThemeToggler />
          <ul className='flex items-center max-sm:text-sm justify-between max-sm:justify-around'>
            {
              links.map((link) => (
                <li key={link.index}>
                  <Link href={link.url} className='inline-block sm:px-2 md:px-2 xl:px-4 py-2 text-lg font-normal hover:cursor-pointer hover:font-bold
                   text-gray-300 hover:text-coral-red transition ease-in-out hover:scale-110 duration-300'>
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