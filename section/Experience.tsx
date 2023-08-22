'use client'
import { experiences } from '@/constants'
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
        <div className='flex lg:flex-row gap-14 items-start sm:flex-col'>
          {/* Left */}
          <div className='flex sm:flex-row lg:flex-col lg:w-[30%] relative sm:w-full'>
            <ul className='sm:flex-row sm:flex sm:flex-wrap'>
              <div className='border-l-2 border-gray-600 py-4'>
                {
                  experiences.map((experience: Experience, index) => (
                    <div key={index} onClick={() => setSelected(index)} className={`${index === selected ? 'bg-gray-900 border-l-4 border-coral-red' : ''}`}>
                      <li className='py-4 px-4 hover:cursor-pointer hover:bg-gray-900'>
                        <span>{experience.company}</span>
                      </li>
                    </div>
                  ))
                }
              </div>
            </ul>
          </div>
          {/* Right */}
          <div className='relative sm:w-full lg:w-[70%]'>
            <div className='pt-6'>
              <h1 className='text-xl pb-5 font-bold'>
                {experiences[selected].role} @ <span className='text-coral-red'>{experiences[selected].company}</span>
              </h1>
              <p className='text-lg pb-5'>{experiences[selected].start} - {experiences[selected].end}</p>
              <ul>
                {
                  experiences[selected].shortDesc.map((desc: string, index) => (
                    <li key={index} className='pb-4'>
                      <p className='text-lg text-justify'><span className='pr-4 text-coral-red leading-6'>▹</span>{desc}</p>
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