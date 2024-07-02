'use client';
import * as React from "react";
import { useState, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import GlobalApi from "../_utils/GlobalApi";

export default function RatingSystem() {
  const { user } = useKindeBrowserClient();
  const [ratings, setRatings] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);

  useEffect(() => {
    if (user) { 
      setName(user.given_name); 
    }
    
    const storedRatings = localStorage.getItem('ratings');
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings));
    }
  }, [user]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRating = { name, comment, stars };
    const updatedRatings = [...ratings, newRating];
    setRatings(updatedRatings);
    localStorage.setItem('ratings', JSON.stringify(updatedRatings));
    setComment('');
    setStars(0);
  };



 const saveRating=()=>{
  const data={
    data:{
      userName:user.given_name,
      review_comment:comment,
      rating:stars
    }
  }

console.log(saveRating)
 
 GlobalApi.rateStar(data).then(resp=>{
    console.log(resp)
    if(resp) {
      alert("Rating Submitted Successfully")
    }
 })}

  return (
    <div>
      <div className="p-3 box-border mt-10 bg-white">
        <h1 className="text-5xl text-center mt-10" id="services">Customer Testimonials</h1>
        <p className="text-center text-gray-600 text-sm mt-3">Discover why our clients love SEA Salon. Read their experiences and see how our exceptional services and elegant atmosphere leave them feeling pampered and beautiful</p>
      </div>
      <div className="flex justify-center my-5">
        <Carousel className="w-full md:max-w-6xl 2xl:max-w-screen-2xl">
          <CarouselContent>
            {ratings.map((rating, index) => (
              <CarouselItem key={index} className="pl-1 sm:basis-1 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
                <Card key={index} className="flex flex-col justify-center bg-white items-center w-80 shadow-xl m-2 min-h-52 max-h-52">
                  <h2 className="text-2xl px-5 pt-4 max-w-full text-wrap text-right overflow-hidden text-ellipsis whitespace-nowrap">{rating.name}</h2>
                  <p className="text-gray-600 text-sm px-5 pb-5 max-w-full text-center line-clamp-3">{rating.comment}</p>
                  <Rating value={rating.stars} readOnly style={{ maxWidth: 200 }} />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      
  <div className="flex justify-center">
    <Dialog>
    <DialogTrigger className="bg-black rounded-full text-white p-3 px-7 my-10 hover:bg-transparent hover:text-black border-black border-2 hover:border-black transition-all ease-in-out">Rate Us</DialogTrigger>
    <DialogTitle></DialogTitle>
    <DialogContent>
      <DialogHeader>
        <DialogDescription>
          <Card className="flex justify-center flex-col items-center border-none p-10">
          <h1 className='text-3xl text-center mb-8'>Rate Our Services</h1>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3'>
              <Label className='text-lg'>Comment</Label>
              <Input className='border-2 border-black rounded-md' type="text" value={comment} onChange={(e) => setComment(e.target.value)} required />
              <div className='flex gap-2 items-center justify-evenly'>
                <Label className='text-lg'>Rating</Label>
                <Rating className='items-center' value={stars} onChange={setStars} style={{ maxWidth: 200 }} required />
              </div>
              <Button className='items-center bg-black hover:bg-transparent hover:border-2 hover:text-black hover:border-black transition-all'
              onSubmit={()=>saveRating()}>
                Submit
              </Button>
            </div>
          </form>
        </Card>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  </div>
    </div>
  );
}
