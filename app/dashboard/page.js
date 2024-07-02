"use client"
import React, { useState } from 'react'
import MainHeader from '../_components/MainHeader'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import GlobalApi from '../_utils/GlobalApi';

function Dashboard() {
  const [Addservices, setAddservice] = useState('');
  const [AddDuration, setAddDuration] = useState('');

  const AddServices = () => {
    const data = {
      service_name:Addservices,
      service_duration:AddDuration
    };

    console.log("Service data:", data);
  
    GlobalApi.addService(data).then(resp => {
      console.log(resp);
      if (resp) {
        alert("Add Services Success");
      }
    }).catch(error => {
      console.error("Error add service: ", error);
      alert("Add Service Failed");
    });
  };


  return (
    <div>
        <MainHeader/>
        <Input placeholder="Service Name"
        value={Addservices}
        onChange={(e) => setAddservice(e.target.value)}/>

        <Input 
        placeholder='Duration'
        value={AddDuration} 
        onChange={(e) => setAddDuration(e.target.value)}/>

        <Button type="button"
        onClick={()=>AddServices()} >Submit</Button>
    </div>
  )
}

export default Dashboard