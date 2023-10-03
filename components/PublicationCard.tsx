import { Publication } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PublicationCard = ({ publication }: {
  publication: Publication
}) => {
  return (
    <Link href={publication.link} target='_blank'>
      <div className='border p-4 rounded-xl flex flex-col md:flex-row'>
        <div className='pr-4 mx-auto'>
          <Image src={publication.imgUrl}
            objectFit='contain'
            alt='project-cover'
            width={200}
            height={10}
          />
        </div>
        <div className='flex-1 pt-4 md:py-0'>
          <h1 className='text-2xl pb-5'>{publication.title}</h1>
          <p className='line-clamp-6 text-md'>{publication.abstract}</p>
        </div>
      </div>
    </Link>
  )
}

export default PublicationCard