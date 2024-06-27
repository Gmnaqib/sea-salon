import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Service() {
  return (
    <div id='services'>
      <h1 className='text-5xl text-center md:mt-10'>Our Services</h1>
      <p className='text-gray-600 text-center text-sm md:mt-4 2xl:mt-6'>Indulge in our top-tier services: expert haircuts and styling, meticulous manicure and pedicure, <br/> and rejuvenating facial treatments.</p>

      <div className='flex flex-row justify-evenly items-center mt-5 2xl:mt-10'>
        <div className='flex flex-col justify-center items-center w-80 shadow-lg'>
          <img src="/hairstylist.jpg" alt="" className='w-full p-0'/>
          <h2 className='text-2xl px-5 pt-5 max-w-full text-center'>Hairycut & Styling</h2>
          <p className='text-gray-600 text-sm px-5 pb-5 max-w-full text-center'>Expert cuts and styles <br/>tailored to you</p>
        </div>

        <div className='flex flex-col justify-center items-center w-80 shadow-lg'>
          <img src="/pedicure.jpg" alt="" className='w-full p-0'/>
          <h2 className='text-2xl px-5 pt-5 max-w-full text-center'>Manicure & Pedicure</h2>
          <p className='text-gray-600 text-sm px-5 pb-5 max-w-full text-center'>Luxurious care for hands <br />and feet</p>
        </div>

        <div className='flex flex-col justify-center items-center w-80 shadow-lg'>
          <img src="/facial.jpg" alt="" className='w-full p-0'/>
          <h2 className='text-2xl px-5 pt-5 max-w-full text-center'>Facial Treatments</h2>
          <p className='text-gray-600 text-sm px-5 pb-5 max-w-full text-center'>Revitalizing treatments for <br />radiant skin</p>
        </div>
      </div>
      <div className='flex justify-center pt-10'>
      <Button className='items-center bg-black hover:bg-transparent hover:border-2 hover:text-black hover:border-black transition-all'>
        More Services <ArrowRight className='ml-2'/></Button>
      </div>
    </div>
  )
}

export default Service