import React from 'react'
import ContactForm from './ContactForm'

 export default function Contact() {
  return (
    <div className='ContactForm flex flex-col max-w-3xl justify-items-center mb-10'>
        <div className=''>
          <h2 className='font-bold text-2xl text-center mb-6'>Contact</h2>
        </div>
        <div>
          <h3 className='text-xl text-center text-stone-600 italic mb-6'>Want to work Together? I thought you'd never ask!</h3>
        </div>
        <div className='max-w-xl'>
          <p className='text-stone-800 text-center mb-10'>You can get in contact with me for consultation, general inquiries, potential volunteer work, and more by filling out the form below or emailing me at edwardakapo@outlook.com</p>
        </div>
        <div className=''>
          <ContactForm />
        </div>
    </div>
  )
}
