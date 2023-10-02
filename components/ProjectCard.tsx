import React from 'react'
import { AiOutlineGithub } from "react-icons/ai"
import { HiExternalLink } from "react-icons/hi"
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Domain, Github, Project } from '@/types'
import Link from 'next/link'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const ProjectCard = ({ project}: {
  project: any
}) => {
  return (
    <Card className="lg:max-w-md w-full relative hover:border-white transition-all ease-in-out duration-500">
      <CardContent className='min-h-[340px] relative'>
        <Image src={project.imgUrl} 
          fill
          sizes="100vw"
          objectFit='cover'
          alt='project-cover'
          className='rounded-t-sm'
        />
      </CardContent>
      <CardHeader>
        <CardTitle className='text-coral-red'>{project.title}</CardTitle>
        <CardDescription className='pt-3 pb-12'>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter className='absolute bottom-0'>
        {typeof project.github === 'object' && 
          <Popover>
            <PopoverTrigger>
              <AiOutlineGithub size={24} className='opacity-60 hover:opacity-100 mr-2'/>
            </PopoverTrigger>
            <PopoverContent align='start'>
              <div className='flex gap-4 items-center justify-center'>
              {
                project.github.map((github: Github, index: number) => (
                  <Link href={github.link} target='_blank' key={index}>
                    <div className='flex flex-col items-center justify-center'>
                      <Image width="48" height="48" src={github.icon} alt="icon" priority />
                      <span>{github.title}</span>
                    </div>
                  </Link>
                ))
              }
              </div>
            </PopoverContent>
          </Popover>
        }
        {
          typeof project.github === 'string' &&  
            <Link href={project.github} target='_blank'>
              <AiOutlineGithub size={24} className='opacity-60 hover:opacity-100 mr-2'/>          
            </Link>
        }

        {typeof project.domain === 'object' && 
          <Popover>
            <PopoverTrigger>
              <HiExternalLink size={24} className='opacity-60 hover:opacity-100 mr-2'/>
            </PopoverTrigger>
            <PopoverContent align='start'>
              <div className='flex gap-4 items-center justify-center'>
              {
                project.domain.map((domain: Domain, index: number) => (
                  <Link href={domain.link} target='_blank' key={index}>
                    <div className='flex flex-col items-center justify-center'>
                      <Image width="48" height="48" src={domain.icon} alt="icon" priority />
                      <span>{domain.title}</span>
                    </div>
                  </Link>
                ))
              }
              </div>
            </PopoverContent>
          </Popover>
        }
        {
          typeof project.domain === 'string' && 
            <Link href={project.domain} target="_blank">
              <HiExternalLink size={24} className='opacity-60 hover:opacity-100'/>
            </Link>
        }
      </CardFooter>
    </Card>
  )
}

export default ProjectCard