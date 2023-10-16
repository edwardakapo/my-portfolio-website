import Link from 'next/link'
import PagePhoto from './components/mainPagePhoto'
import './globals.css'

export default function Home() {
  
  return (
  <section  className='HomePage flex gap-x-12  max-w-3xl mb-10 px-5'>
      <div className='max-w-[26rem] HomePicture'>
        <PagePhoto desc="myphotosssss" src="/dinner_pic.jpg"/>
      </div>
      <div className='HomeText mt-10'>
        <h2 className='font-bold text-4xl'>Hi, I'm Edward.</h2>
        <br/>
        <p className='text-sm'>I'm a Backend Software Developer living in Canada with a Bachelor's degree in Computer Science and an AWS Cloud Practitioner Certification. </p>
        <br/>
        <p className='text-sm'>With close to two years of professional coding experience, I've sharpened my skills in languages such as Java, Javascript, and SQL while diving deep into technologies like Kubernetes, AWS, and GitLab.</p>
        <br/>
        <p className='text-sm'>I also offer bespoke software solutions as a freelance developer to businesses and individuals</p>
        <br/>
        <p className='text-sm'>You can find links to my more recent projects <Link href="/Projects"><span className='text-sm font-bold inline hover:text-stone-400'>here,</span></Link>  or visit my <Link href="https://github.com/edwardakapo" target='_blank'><span className='text-sm font-bold inline hover:text-stone-400'>Github</span></Link> to get a look at all my projects</p>
        <br/>
        <Link href="/Contact"><p className='text-sm font-bold hover:text-stone-400'> Lets Chat!</p></Link>
      </div>
  </section>

  )
}
