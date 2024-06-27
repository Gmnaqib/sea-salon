import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='relative'>
        <Image src='/hero.jpg' alt='hero'
            width={1920} height={0} className="bg-cover w-full h-full"/>
        
        <div className='px-16'>
            <h1 className="text-white text-6xl 2xl:text-8xl absolute top-40">Beauty and Elegance</h1>
            <h1 className="text-white text-6xl 2xl:text-8xl 2xl:mt-36 absolute top-40 mt-24">Redefined</h1>
            <Link href="/booking"><Button variant='outline' className='absolute top-52 mt-36 2xl:mt-64 bg-transparent text-white'>Book Now</Button></Link>
            <p className="text-white text-lg absolute top-96 mt-20 2xl:mt-64 2xl:text-2xl">At SEA Salon, we redefine beauty <br /> and elegance through <br /> personalized, exquisite care</p>
        </div>

        {/* Kotak Hitam */}
        <div className="flex flex-row bg-black text-white justify-evenly p-3">  
            <h3 className="px-3">~ Discover True Beauty in Every Detail ~ </h3>
    </div>
        
    </div>
  )
}

export default Hero
