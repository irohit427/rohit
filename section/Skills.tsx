import { skills } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-10/12 mx-auto relative sm:pt-2 md:pt-4 lg:pt-8 xl:pt-10'>
      <div className='flex flex-col'>
        <div className='pb-12'>
          <h1 className='heading'>Skills</h1>
        </div>
        <div>
          {skills.map((skill, index) => (
            <div className='pb-8 flex flex-col' key={index}>
              <div className='text-xl font-bold mb-4'>{skill.title}</div>
              <div className='flex flex-row'>
                {skill.techs.map((tech, index) => (
                  <div key={index} className='p-2'>
                   <Image src={`data:image/svg+xml;utf8,${encodeURIComponent(tech.icon)}`} 
                    alt='icon' width={48} height={48} 
                    className='grayscale hover:cursor-pointer hover:grayscale-0 hover:scale-125 transition ease-in-out duration-300'
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='box' />
    </div>
  )
}

export default Skills