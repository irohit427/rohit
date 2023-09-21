import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/constants'
import { Project } from '@/types'
import React from 'react'

const Projects = () => {
  return (
    <div className='w-10/12 mx-auto relative sm:-my-4 md:-my-4 lg:-my-4 xl:-my-4'>
      <div className='flex flex-col gap-20'>
        <div>
          <h1 className='heading'>Projects</h1>
        </div>
        <div className='grid xl:grid-cols-3 gap-4 pt-4'>
          {
            projects.map((project: Project, index: number) => <ProjectCard project={project} key={index} />)
          }
        </div>
      </div>
      <div className='box' />
    </div>
  )
}

export default Projects