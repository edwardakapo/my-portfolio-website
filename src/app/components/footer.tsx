import React from 'react'

const currentYear = new Date().getFullYear();
export default function footer() {
  return (
    <div className='flex-box'>
        <div className='flex mb-2'>
          <a className="mx-2 bg-stone-400 hover:bg-stone-600 w-9 h-9  rounded-md" href='https://github.com/edwardakapo' target="_blank"> <img src='/github-icon.svg' alt="Github" /> </a>
          <a className="mx-2 bg-stone-400 hover:bg-stone-600 w-9 h-9  rounded-md" href='https://www.linkedin.com/in/oluwademilade-akapo-a077aa235/' target="_blank"> <img src="/linkedin-icon.svg" alt="LinkedIn" /> </a>
          <a className="mx-2 bg-stone-400 hover:bg-stone-600 w-9 h-9  rounded-md" href='https://codepen.io/edwardakapo' target="_blank"> <img src="/codepen-icon.svg" alt="CodePen"/> </a>
        </div>
        <div>
          <p className='text-sm text-center'>© {currentYear} Edward Akapo</p>
        </div>

    </div>
    
  )
}