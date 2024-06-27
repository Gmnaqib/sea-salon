import React from 'react'

function Rating() {
  return (
    <div>
        <div className="p-3 box-border mt-10">
            <h1 className="text-5xl text-center mt-10" id="services">Customer Testimonials</h1>
            <p className="text-center text-gray-600 text-sm mt-3">Discover why our clients love SEA Salon. Read their experiences and see how our exceptional <br/> services and elegant atmosphere leave them feeling pampered and beautiful</p>
    
            <div className="flex flex-row justify-evenly mt-10">
                <div className="flex flex-col justify-center bg-white items-center w-80 shadow-xl">
                   
                    <h2 className="text-2xl px-5 pt-4 max-w-full text-wrap text-right ">Raisa</h2>
                    <p className="text-gray-600 text-sm px-5 pb-5 max-w-full text-center ">"Absolutely loved my experience at SEA Salon! The staff was professional and my haircut turned out perfect. Highly recommend!"</p>
                </div>
                <div className="flex flex-col justify-center bg-white items-center w-80 shadow-xl">
                   
                    <h2 className="text-2xl px-5 pt-5 max-w-full text-wrap text-right ">Raisa</h2>
                    <p className="text-gray-600 text-sm px-5 pb-5 max-w-full text-center ">"Absolutely loved my experience at SEA Salon! The staff was professional and my haircut turned out perfect. Highly recommend!"</p>
                </div>
                <div className="flex flex-col justify-center bg-white items-center w-80 shadow-xl">
                    <h2 className="text-2xl px-5 max-w-full text-wrap text-right ">Raisa</h2>
                    <p className="text-gray-600 text-sm px-5 max-w-full text-center ">"Absolutely loved my experience at SEA Salon! The staff was professional and my haircut turned out perfect. Highly recommend!"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rating