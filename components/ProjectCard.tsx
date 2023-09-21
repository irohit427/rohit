import React from 'react'
import { AiOutlineGithub } from "react-icons/ai"
import { HiExternalLink } from "react-icons/hi"
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Project } from '@/types'

const ProjectCard = ({ project}: {
  project: Project
}) => {
  return (
    // <div className='md:h-[400px] xl:h-[400px] 2xl:h-[540px] lg:h-[450px] sm:h-[500px] bg-gray-500 hover:bg-gray-600 mb-8 rounded-md hover:cursor-pointer border transiton ease-in-out duration-300 hover:scale-[101%] hover:ring-1 ring-white'>
    //   <div className='flex flex-col h-full'>
    //     <div className=' w-full max-h-[100%]'>
    //       
    //     </div>
    //     <div className='mt-4 h-[160px] flex flex-col xl:gap-8 lg:gap-10 md:gap-8 sm:gap-6'>
    //       <div className='mx-auto px-4 text-left'>
    //         <h1 className='text-lg bold'>Elsa-AI</h1>
    //         <p className='text-sm line-clamp-4 text-justify pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, tortor id pharetra fringilla, ante magna lacinia dolor, ac tempus libero lacus in erat. Nulla eget ex quis leo viverra rhoncus vitae vitae sem.
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, tortor id pharetra fringilla, ante magna lacinia dolor, ac tempus libero lacus in erat. Nulla eget ex quis leo viverra rhoncus vitae vitae sem.
    //         </p>
    //       </div>
    //       <div className='flex flex-row gap-4 pl-4 py-4'>
    //         <AiOutlineGithub size={24} className='opacity-60 hover:opacity-100'/>
    //         <HiExternalLink size={24} className='opacity-60 hover:opacity-100'/>
    //       </div>
    //     </div>
    //   </div>

    // </div>
    <Card className="lg:max-w-md w-full">
      <CardContent>
      <Image src={project.imgUrl} 
            width={0}
            height={0}
            
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt='elsa-ai' />
      </CardContent>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard