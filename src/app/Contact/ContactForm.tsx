'use client'
import React , {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
require("dotenv").config();

export default function ContactForm() {
  const form = useRef(null);

  const handleSubmit = (e : any) =>{
    e.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
      form.current
    ){
  emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
  .then((result) => {
    toast.success("Message sent Successfully!", {
      pauseOnHover: false,
    });
      console.log(result.text);
  }, (error) => {
    toast.error("Message Failed to send!", {
      pauseOnHover: false,
    });
      console.log(error.text);
      console.log("Error sending with email.js");
  });
}else{
  toast.error("Message Failed to send!", {
    pauseOnHover: false,
  });
  console.log("cannot get process envs");
}
e.target.reset();
};

  return (
    <div className='mx-4 my-1'>
      <ToastContainer 
      pauseOnHover/>
      <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
        <div className=''>
          <label >Name<p className=' indent-2 inline-block text-stone-400 text-xs'>  (required)</p></label>
            <div className='grid grid-cols-2 gap-x-2 pt-2'>
                <div className='flex flex-col'>
                  <label htmlFor='Fname' className='text-xs'>First Name</label>
                  <input className= " p-2 bg-stone-50 border border-stone-400" type='text' id='Fname' name='Fname' required></input>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='Lname' className='text-xs'>Last Name</label>
                  <input className= " p-2 bg-stone-50 border border-stone-400" type='text' id='Lname' name='Lname' required></input>
                </div>
            </div>
        </div>
        <div className='flex flex-col '>
          <label htmlFor='Email' className='pb-2'> Email Address <p className=' indent-2 inline-block text-stone-400 text-xs'>  (required)</p></label>
          <input className= "p-2 bg-stone-50 border border-stone-400" type='email' required id='Email' name='Email'></input>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='Subject' className='pb-2'> Subject <p className=' indent-2 inline-block text-stone-400 text-xs'>  (required)</p></label>
          <input className= "p-2 bg-stone-50 border border-stone-400" type='input' required placeholder='Lets Work Together!' id='Subject' name='Subject'></input>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='Message' className='pb-2'> Message <p className=' indent-2 inline-block text-stone-400 text-xs'>  (required)</p></label>
          <textarea className= "bg-stone-50 border border-stone-400 p-2" rows={4} id='Message' name='Message' />
        </div>
        <button type='submit' value="send" className='sm:w-1/4 w-1/3 p-4 border rounded border-black text-base font-bold hover:bg-black hover:text-white'>SUBMIT</button>
      </form>
    </div>
  )
}

