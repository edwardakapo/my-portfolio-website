import React from 'react'
import Navbar from './navbar'
import MainHeader from './MainHeader'

export default function TopSection() {
  return (
    <div className='flex flex-col items-center'>
        <MainHeader />
        <Navbar />
    </div>
  )
}

