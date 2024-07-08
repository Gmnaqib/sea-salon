"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from "@/components/ui/use-toast"

function Bookform() {
  const { toast } = useToast();
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]); 
  const { user } = useKindeBrowserClient();
  const [serviceList, setServiceList] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    getServiceList();
  }, []);

  useEffect(() => {
    checkBookedSlots();
  }, [date, selectedService]);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: i + ':00 AM' });
    }
    for (let i = 1; i <= 8; i++) {
      timeList.push({ time: i + ':00 PM' });
    }
    setTimeSlot(timeList);
  };

  const getServiceList = () => {
    GlobalApi.getService().then(resp => {
      console.log(resp.data.data);
      setServiceList(resp.data.data);
    }).catch(error => {
      console.error("Error fetching data: ", error);
    });
  };

  const checkBookedSlots = () => {
    if (selectedService && date) {
      const formattedDate = date.toISOString().split('T')[0];
      GlobalApi.getBookedSlots(selectedService, formattedDate).then(resp => {
        console.log("Booked slots response:", resp.data);
        setBookedSlots(resp.data.data || []); // Pastikan bookedSlots adalah array
      }).catch(error => {
        console.error("Error fetching booked slots: ", error);
      });
    }
  };

  const saveBooking = () => {
    const data = {
      data: {
        userName: user.given_name + " " + user.family_name,
        serviceName: selectedService,
        reservationDate: date.toISOString().split('T')[0], 
        reservationTime: selectedTimeSlot,
        phone: phoneNumber
      }
    };

    console.log("Booking data:", data);
  
    GlobalApi.bookServices(data).then(resp => {
      console.log(resp);
      if (resp) {
        toast({
          title: "Success",
          description: "Booking Success",
        });
      }
    }).catch(error => {
      console.error("Error booking service: ", error);
      alert("Booking Failed");
    });
  };

  const isPastDay = (day) => {
    return day < new Date();
  };

  const isSlotBooked = (time) => {
    return bookedSlots.some(slot => slot.attributes.reservationTime === time);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline' className='absolute top-52 mt-36 2xl:mt-64 bg-transparent text-white'>Book Now</Button>
        </DialogTrigger>
        <DialogContent className='p-10 max-w-screen-md'>
          <DialogHeader>
            <DialogTitle className=' mb-3'>Booking Form</DialogTitle>
            <div className='flex justify-evenly'>

              <div className='flex flex-col items-baseline gap-2'>
                <h2 className='flex gap-2 items-center'>
                  <CalendarDays className='h-4 w-4'/>
                  Select Date
                </h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={isPastDay}
                  className="rounded-md border"
                />

                <div className='mt-2'>
                <Input 
                    placeholder='Phone Number'
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                  />
                </div>
              </div>

              <div>
                <h2 className='mb-2'>Services</h2>
                <Select onValueChange={setSelectedService}>
                  <SelectTrigger>
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
                <div id='timeslot' className='grid grid-cols-3'>
                  {timeSlot.map((item, index) => (
                    <h2
                      onClick={() => !isSlotBooked(item.time) && setSelectedTimeSlot(item.time)}
                      className={`p-2 m-1 border rounded-lg text-xs text-black cursor-pointer ${item.time === selectedTimeSlot && 'bg-black text-white'} ${isSlotBooked(item.time) && 'bg-gray-200 cursor-not-allowed'}`}
                      key={index}
                      style={{ pointerEvents: isSlotBooked(item.time) ? 'none' : 'auto' }}
                    >
                      {item.time}
                    </h2>
                  ))}
                </div>
              </div>

            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <div className='gap-3 flex'>
                <div className='flex gap-3'>
                  <Button type="button" variant="outline" className='text-red-500 border-red-500'>Close</Button>
                  <Button type="button" disabled={!(date && selectedTimeSlot)} onClick={saveBooking}>Book</Button>
                </div>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Bookform;
