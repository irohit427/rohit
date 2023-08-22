import Button from '@/components/Button'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-10/12 mx-auto relative mb-12'>
      <div className='flex flex-col items-center'>
        <div className='heading'>
          <h1>Get In Touch</h1>
        </div>
        <div className='py-16 text-justify leading-9 w-1/2 text-lg'>
          <p>I’m not currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Contact