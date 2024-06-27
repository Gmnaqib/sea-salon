'use client'
import { useState } from 'react';
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Service from "./_components/Service";
import Marketing from "./_components/Marketing";
import Admin from "./_components/Admin";
import '@smastrom/react-rating/style.css'
import RatingSystem from './_components/RatingSystem';



export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Service/>
      <Marketing/>
      <RatingSystem/>
      <Admin/>
    </div>
  );
}
