import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const Projects = () => {
  return (
    <div className='w-10/12 mx-auto relative sm:-my-4 md:-my-4 lg:-my-4 xl:-my-4'>
      <div className='flex flex-col gap-20'>
        <div>
          <h1 className='heading'>Projects</h1>
        </div>
        <div className='md:columns-2 sm:columns-1 lg:columns-3 gap-8'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className='box' />
    </div>
  )
}

export default Projects