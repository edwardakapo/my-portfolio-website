import Link from 'next/link'
import PagePhoto from './components/mainPagePhoto'
import './globals.css'

export default function Home() {
  
  return (
  <section  className='HomePage flex gap-x-12  max-w-3xl mb-10 px-5'>
      <div className='max-w-[26rem] HomePicture'>
        <PagePhoto desc="myphotosssss" src="/dinner_pic.jpg"/>
      </div>
      <div className='HomeText mt-10 md:mt-2'>
        <h2 className='font-bold text-4xl'>Hi, I'm Edward.</h2>
        <br/>
        <p className='text-sm'>I'm a Full Stack Software Developer based in Canada with a Bachelor's in Computer Science, three years of experience, and two AWS certifications. </p>
        <br/>
        <p className='text-sm'>Specializing in scalable web applications, my expertise includes front and back-end technologies, cloud architecture, and advanced API development. I ensure robust deployment pipelines, well-tested code, and responsive, functional UI/UX.</p>
        <br/>
        <p className='text-sm'>As a freelance developer, I offer custom solutions to small businesses, allowing them to streamline operations, optimize workflows, and enhance their overall efficiency."</p>
        <br/>
        <p className='text-sm'>You can find links to my more recent projects <Link href="/Projects"><span className='text-sm font-bold inline hover:text-stone-400'>here,</span></Link>  or visit my <Link href="https://github.com/edwardakapo" target='_blank'><span className='text-sm font-bold inline hover:text-stone-400'>Github</span></Link> to get a look at all my projects</p>
        <br/>
        <Link href="/Contact"><p className='text-sm font-bold hover:text-stone-400'> Lets Chat!</p></Link>
      </div>
  </section>

  )
}
