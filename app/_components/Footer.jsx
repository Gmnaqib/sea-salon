import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-black">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
    <Image src='/logos.png' alt='logo'
            width={150} height={80}/>
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
      At SEA Salon, we redefine beauty and elegance through personalized, exquisite care
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <a className="text-white transition hover:text-yellow-600" href="#about"> About </a>
      </li>

      <li>
        <a className="text-white transition hover:text-yellow-600" href="#services"> Services </a>
      </li>
    </ul>
  </div>
</footer>
  )
}

export default Footer