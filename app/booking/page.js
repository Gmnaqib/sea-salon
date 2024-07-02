"use client"
import React, { useEffect, useState } from 'react'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from '../_utils/GlobalApi'
import MainHeader from '../_components/MainHeader'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function Booking() {
  
  const {user} = useKindeBrowserClient();
  const [serviceList,setServiceList]=useState([]);


  useEffect(()=>{
    getServiceList()
},[])

const getServiceList=()=>{
    GlobalApi.getService().then(resp=>{
        console.log(resp.data.data)
        setServiceList(resp.data.data);
    })
}

  return (
    
    <div>
      <MainHeader/>

        <div>
        <h1 className='text-center text-5xl font-semibold p-10'>Book form</h1>
          <div className='p-10 border-2 border-blue-700 2xl:mx-805'>
            <h1 className='text-xl py-3'>Services</h1>
          <Select>
          <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Services</SelectLabel>
                {serviceList.map((item) => (
                  <SelectItem key={item.id} value={item.attributes.service_name}>
                    {item.attributes.service_name}
                  </SelectItem>
                ))}
              </SelectGroup>
          </SelectContent>
        </Select>
          </div>

          <div className='bg-orange-200'>
            <h1>Data</h1>
          </div>
        </div>

    </div>
  )
}

export default Booking