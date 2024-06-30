"use client"
import React, { useEffect } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import MainHeader from '../_components/MainHeader'

function Booking() {

  useEffect(()=>{
    getServiceList()
})

const getServiceList=()=>{
    GlobalApi.getService().then(resp=>{
        console.log(resp)
    })
}

  return (
    
    <div>
      <MainHeader/>
        <h1>Book form</h1>
    </div>
  )
}

export default Booking