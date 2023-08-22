import React from 'react'
import { AiOutlineGithub } from "react-icons/ai"
import { HiExternalLink } from "react-icons/hi"

const ProjectCard = () => {
  return (
    <div className='h-[420px] bg-gray-600 mb-8 rounded-xl hover:cursor-pointer border-2 transiton ease-in-out duration-300 hover:scale-[101%] hover:ring-4 ring-white'>
      <div className='flex flex-col'>
        <div className='bg-red-300 h-[240px] z-[10]'>
          Image Section
        </div>
        <div className='mt-4 pl-4 h-[160px] flex flex-col gap-4'>
          <h1 className='text-xl bold'>Title</h1>
          <p className='text-lg line-clamp-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, tortor id pharetra fringilla, ante magna lacinia dolor, ac tempus libero lacus in erat. Nulla eget ex quis leo viverra rhoncus vitae vitae sem.
          </p>
          <div className='flex flex-row gap-4'>
            <AiOutlineGithub size={24} className='opacity-60 hover:opacity-100'/>
            <HiExternalLink size={24} className='opacity-60 hover:opacity-100'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectCard