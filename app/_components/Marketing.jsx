import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Marketing() {
  return (
    <div>
        <div className='flex flex-row bg-black mt-10'>
            <div className='flex flex-col items-center justify-center ml-auto'>
                <h1 className='text-white text-center text-2xl'>Experience the Best in Beauty <br /> Book Your Appointment at SEA Salon</h1>
                <Link href="/dashboard"><Button className=' bg-transparent border-2 border-white text-white mt-5 hover:border-2 hover:bg-white hover:text-black hover:border-white'>Book Now</Button></Link>
            </div>
            <div className='ml-auto'>
                <img src="/salonenv.jpeg" alt="salon Env" />
            </div>
        </div>
    </div>
  )
}

export default Marketing