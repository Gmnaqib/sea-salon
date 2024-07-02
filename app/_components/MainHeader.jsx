"use client"
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


function Header() {
  const {user, permissions,getPermissions} = useKindeBrowserClient();

  useEffect(() => {
    console.log(user,permissions,getPermissions())
  },[user])

  return (
    <div id='about'>
        <div className='absolute  w-full flex items-center gap-10 justify-between p-6 px-16 z-10 bg-black'>
            <Image src='/logos.png' alt='logo'
            width={150} height={80}/>

            <ul className='text-white flex items-center gap-8'>
                <li className='hover:text-yellow-500'><Link href="/">Home</Link></li>
                <li className='hover:text-yellow-500'><Link href="#services">Services</Link></li>      
                <li className='hover:text-yellow-500'><Link href="#contact">Contact</Link></li>
                
                {user?
                <Popover>
                <PopoverTrigger asChild><Button className='bg-white text-black hover:bg-white font-semibold'>{user.given_name}</Button></PopoverTrigger>
                <PopoverContent className='w-36'>
                <ul className="flex flex-col gap-0">
                  {permissions.permissions[0] ==="admin" ?
                  <li><Link href="/dashboard"><Button variant='ghost' className='p-2'>Dashboard</Button></Link></li>
                  :<li><Button variant='ghost' className='p-2'>My Booking</Button></li>
                  }
                  
                  <li>
                  <LogoutLink><Button variant='ghost' className='p-2'>Log Out</Button></LogoutLink>
                  </li>
                </ul>
                </PopoverContent>
                </Popover>
              
                  
                  :
                  <li><LoginLink><Button variant='outline' className='bg-transparent text-white'>Sign In</Button></LoginLink></li>    
                } 
            </ul>
        </div>
    </div>
  )
}

export default Header