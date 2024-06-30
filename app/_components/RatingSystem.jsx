'use client';
import * as React from "react"
import { useState, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function RatingSystem() {
  const [ratings, setRatings] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const storedRatings = localStorage.getItem('ratings');
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRating = { name, comment, stars };
    const updatedRatings = [...ratings, newRating];
    setRatings(updatedRatings);
    localStorage.setItem('ratings', JSON.stringify(updatedRatings));
    setName('');
    setComment('');
    setStars(0);
  };

  return (
    <div>
        {/* Tabel Rating Bintang */}
        <div className="flex justify-center flex-col items-center gap-10 mx-96 mt-6 py-10 rounded-xl shadow-xl">
            <h1 className='text-3xl text-center'>Rate Our Services</h1>
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3'>
                    <label>Name</label>
                    <Input className='border-2 border-black rounded-md' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    
                    <Label>Comment</Label>
                    <Input className='border-2 border-black rounded-md' type="text"value={comment} onChange={(e) => setComment(e.target.value)}required/>
                    
                    <div className='flex  gap-2 items-center justify-evenly'>
                    <Label className='text-lg'>Rating</Label>
                    <Rating className='items-center' value={stars} onChange={setStars} style={{ maxWidth: 200 }} required/> </div> 

                    <Button className='items-center bg-black hover:bg-transparent hover:border-2 hover:text-black hover:border-black transition-all'>
                    Submit</Button>
            </div>
            </form>   
        </div>


        <div className="p-3 box-border mt-10 bg-white">
        <h1 className="text-5xl text-center mt-10" id="services">Customer Testimonials</h1>
        <p className="text-center text-gray-600 text-sm mt-3">Discover why our clients love SEA Salon. Read their experiences and see how our exceptional <br/> services and elegant atmosphere leave them feeling pampered and beautiful</p>

    </div>
                            {/* Batas Tabel Rating Bintang */}
    <div className="flex justify-center my-5">
      <Carousel className="w-full max-w-6xl">
        <CarouselContent className="">
        {ratings.map((rating, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
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

    </div>
  );
}
