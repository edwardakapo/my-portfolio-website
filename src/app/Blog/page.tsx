import Image from 'next/image'

export default function Blog(){
    return (
        <div className='container max-w-xl flex flex-col gap-y-4 justify-center items-center sm:my-14 p-5'>
            <h1 className='font-bold text-3xl text-stone-600'>Coming Soon...</h1>
            <p className='justify-center text-center'>Hey There! <br/>Exciting things are on the horizon! <br/> A brand new blog section is dropping soon. Don’t miss out - bookmark my website and check back in for some fresh insights. See you soon! </p>
            <img src='/construction.png'></img>
        </div>
    )
}