'use client'
import { experiences } from '@/constants'
import { cn } from '@/lib/utils'
import { Experience } from '@/types'
import React, { useState } from 'react'

const Experience = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className='w-10/12 mx-auto relative sm:-my-12 md:-my-12 lg:-my-12 xl:-my-12'>
      <div className='flex flex-col'>
        <div className='pb-12'>
          <h1 className='heading'>Experience</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-14 items-start'>
          {/* Left */}
          <div className='sm:w-full md:w-[30%]'>
            <ul>
              <div className='border-b-2 md:border-b-0 md:border-l-2 border-gray-600 py-0 flex flex-row md:flex-col'>
                {
                  experiences.map((experience: Experience, index) => (
                    <div key={index} onClick={() => setSelected(index)} className={cn(`${index === selected ? 'bg-coral-red dark:bg-zinc-700 rounded-t-md md:rounded-none border-b-4 md:border-b-0 md:border-l-4 border-coral-red' : ''}`, '')}>
                      <li className='hover:rounded-t-md md:hover:rounded-none hover:cursor-pointer hover:bg-coral-red h-24 w-[110px] md:w-full flex justify-center items-center text-center'>
                        <span className='line-clamp-1 md:line-clamp-none'>{experience.company}</span>
                      </li>
                    </div>
                  ))
                }
              </div>
            </ul>
          </div>
          {/* Right */}
          <div className='relative sm:w-full lg:w-[70%]'>
            <div className='pt-0 md:pt-6'>
              <h1 className='text-xl pb-5 font-bold'>
                {experiences[selected].role} @ <span className='text-coral-red'>{experiences[selected].company}</span>
              </h1>
              <p className='text-lg pb-5'>{experiences[selected].start} - {experiences[selected].end}</p>
              <ul>
                {
                  experiences[selected].shortDesc.map((desc: string, index) => (
                    <li key={index} className='pb-4'>
                      <p className='text-md md:text-lg text-justify'><span className='pr-4 text-coral-red leading-6'>▹</span>{desc}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='box' />
    </div>
  )
}

export default Experience