import { aboutText } from '@/constants'
import React from 'react'

const About = () => {
  return (
    <div className='w-10/12 mx-auto relative md:my-8 lg:my-10 xl:my-16 pb-16'>
      <div className='flex flex-col'>
        <div className='pb-12'>
          <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>About</h1>
        </div>
        <div className='leading-9 text-xl break-words text-justify'>
          <p>{aboutText}</p>
        </div>
      </div>
    </div>
  )
}

export default About