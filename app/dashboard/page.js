"use client"
import React, { useEffect, useState } from 'react';
import MainHeader from '../_components/MainHeader';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import GlobalApi from '../_utils/GlobalApi';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function Dashboard() {
  const [serviceName, setServiceName] = useState('');
  const [serviceDuration, setServiceDuration] = useState('');
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    getReservationList();
}, []);


const getReservationList = () => {
    GlobalApi.getReservation().then(resp => {
      console.log(resp.data.data);
      setReservationList(resp.data.data);
    }).catch(error => {
      console.error("Error fetching data: ", error);
    });
  };

  const saveService = () => {
    const data = {
      data: {
        service_name: serviceName,
        service_duration: serviceDuration
      }
    };

    console.log("Service data:", data);

    GlobalApi.addService(data).then(resp => {
      console.log(resp);
      if (resp) {
        alert("Service added successfully");
      }
    }).catch(error => {
      console.error("Error adding service: ", error);
      alert("Failed to add service");
    });
  };

  return (
    <div>
      <MainHeader />
      <div className='flex flex-col justify-center mt-10'>
        <h1 className='p-3 text-2xl text-center'>Dashboard Admin</h1>
        <div className='max-w-xl flex flex-col gap-3 mx-auto'>
          <Label>Service Name</Label>
          <Input 
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />

          <Label>Service Duration</Label>
          <Input 
            placeholder="Service Duration"
            value={serviceDuration}
            onChange={(e) => setServiceDuration(e.target.value)}
          />

          <Button onClick={saveService}>Submit</Button>
        </div>

        <div className='flex mt-10 mx-20 flex-col'>
        <h1 className='text-center text-2xl m-5'>Tabel Booking List</h1>
        <Table>
            <TableCaption><h1 className='text-center'>Tabel Booking List</h1></TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Service Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                
                {reservationList.map((item) => (
                    <TableRow>
                    <TableCell key={item.id} className="font-medium">{item.attributes.userName}</TableCell>
                    <TableCell key={item.id} className="font-medium">{item.attributes.serviceName}</TableCell>
                    <TableCell key={item.id} className="font-medium">{item.attributes.reservationDate}</TableCell>
                    <TableCell key={item.id} className="font-medium">{item.attributes.reservationTime}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
