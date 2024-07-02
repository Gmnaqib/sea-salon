"use client"
import React, { useEffect, useState } from 'react'
import MainHeader from '../_components/MainHeader'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import GlobalApi from '../_utils/GlobalApi';

function myBooking() {
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

  return (
    <div>
        <MainHeader/>
        <h1 className='text-2xl text-center m-3'>My Booking</h1>

        
        
        <div>
        <Table>
            <TableCaption>A list of your Booking</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Service Name</TableHead>
                <TableHead>Date</TableHead>
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
  )
}

export default myBooking