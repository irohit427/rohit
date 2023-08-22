import Image from 'next/image'
import React from 'react'
import {AiOutlineTwitter, AiOutlineGithub} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {FiDribbble} from "react-icons/fi"
import Link from 'next/link'
import { profileLinks } from '@/constants'
import { ProfileLink } from '@/types'

const Hero = () => {
  return (
    <div className="lg:pt-16 pt-10 relative w-10/12 mx-auto ">
      <div className='md:flex items-center justify-between flex-row-reverse'>
        <div className='flex justify-end items-end relative'>
          <Image className=' w-100% h-auto transform -scale-x-100 grayscale hover:grayscale-0' width={480} height={0} src="/display.png" alt="" />
        </div>
        <div className='p-4 pl-0 mt-5 sm:mt-20'>
          <p className='text-xl'>Hello</p>
          <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 lg:pt-6'>
            I&apos;m Rohit
            <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'>A Full Stack Developer </p>
          </h1>
          <p className='text-base sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6'>
            Bringing imagination to live website
          </p>
          <div className='flex items-center mt-6 md:mt-14'>
            <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4 '>
              {
                profileLinks.map((profileLink: ProfileLink, index: number) => (
                  <li key={index}>
                    <Link href={profileLink.link} className='hover:opacity-100 opacity-75 transition ease-in duration-150'>
                      <profileLink.icon size={36} key={index} />
                    </Link>    
                  </li>
                ))
              }
              {/* <li>
                <Link href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'>
                  <AiOutlineTwitter size={36}/>
                </Link>
              </li>
              <li>
                <Link href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'>
                  <GrInstagram size={36}/>
                </Link>
              </li>
              <li>
                <Link href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'>
                  <FiDribbble size={36}/>
                </Link>
              </li>
              <li>
                <Link href="" className='hover:opacity-100 opacity-75 transition ease-in duration-150'>
                  <AiOutlineGithub size={36}/>
                </Link>
              </li> */}
            </ul>
            <Link href="mailto:satendermaurya1222@gmail.com" 
              className='px-6 py-[7px] whitespace-nowrap 
                transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-600 
                rounded-full border-[0.5px] border-[#363636]'>
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero