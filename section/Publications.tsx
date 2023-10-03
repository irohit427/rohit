import PublicationCard from '@/components/PublicationCard'
import { publications } from '@/constants'
import React from 'react'

const Publications = () => {
  return (
    <div className='w-10/12 mx-auto relative'>
      <div className='flex flex-col gap-10'>
        <div>
          <h1 className='heading'>Publications</h1>
        </div>
        {
          publications.map((publication, index) => (
            <PublicationCard publication={publication} key={index}/>
          ))
        }
      </div>
      <div className='box'/>
    </div>
  )
}

export default Publications