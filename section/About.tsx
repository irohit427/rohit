import { aboutText } from '@/constants'
import React from 'react'

const About = () => {
  return (
    <div className='w-10/12 mx-auto relative md:my-8 lg:my-10 xl:mt-16 pt-10'>
      <div className='flex flex-col gap-20'>
        <div>
          <h1 className='heading'>About</h1>
        </div>
        <div className='leading-9 text-xl break-words text-left'>
          <p>{aboutText}</p>
        </div>
      </div>
      <div className='box' />
    </div>
  )
}

export default About