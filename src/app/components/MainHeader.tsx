import Link from 'next/link'
import React from 'react'
import Typewriter from './typewriter'

export default function MainHeader() {
  return (
    <div className="TopSection flex flex-col justify-center items-center">
        <h1 className="  text-6xl text-center font-bold tracking-[.15em] mb-10 hover:text-teal-500">
          <Link href = "/"> 
            EDWARD AKAPO
          </Link>
        </h1>
        <h2 className="text-sm text-center font-bold tracking-[.15em] text-stone-400">CANADA-BASED SOFTWARE DEVELOPER & ENTREPRENEUR</h2>
    </div>
  )
}
9