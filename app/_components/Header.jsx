import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='relative'>
        <div className='absolute  w-full flex items-center gap-10 justify-between p-6 px-16 z-10'>
            <Image src='/logos.png' alt='logo'
            width={150} height={80}/>

            <ul className='text-white flex items-center gap-8'>
                <li className='hover:text-yellow-500'><Link href="/SignIn">Services</Link></li>      
                <li className='hover:text-yellow-500'><Link href="/dashboard">Contact</Link></li>
                <li><Link href="/SignIn"><Button className='2xl:mt-64 bg-white text-black mt-5 hover:border-2 hover:bg-transparent hover:text-white hover:border-white'>Book Now</Button></Link></li>           
            </ul>
        </div>
    </div>
  )
}

export default Header