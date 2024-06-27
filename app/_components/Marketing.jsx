import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Marketing() {
  return (
    <div>
        <div className='flex flex-row bg-black mt-10'>
            <div className='flex flex-col items-center justify-center ml-auto'>
                <h1 className='text-white text-center text-2xl'>Experience the Best in Beauty <br /> Book Your Appointment at SEA Salon</h1>
                <Link href="/dashboard"><Button variant='outline' className='2xl:mt-64 bg-transparent text-white mt-5'>Book Now</Button></Link>
            </div>
            <div className='ml-auto'>
                <img src="/salonenv.jpeg" alt="salon Env" />
            </div>
        </div>
    </div>
  )
}

export default Marketing