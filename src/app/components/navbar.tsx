'use client'
import React, {useState} from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const currentRoute = usePathname();
    
    const [isOpen, setIsOpen] = useState(false);

    const getPath = (currentRoute : string) => {
        if (currentRoute === "/Contact"){
            return "WORK WITH ME";
        }
        else if (currentRoute === "/"){
            return "HOME";
        }
        else {
            return currentRoute.substring(1).toUpperCase();
        }

    }
    return (
        <div className="flex justify-center">
            <div className="Navbar mt-14 mb-10">
                <ul className="flex gap-x-10 text-sm text-stone-600  tracking-[.05em]">
                    <li>
                        <Link className={currentRoute === '/' ? "text-teal-500" : "text-stone-600"} href="/">
                            <h2 className="hover:text-teal-500">HOME</h2>
                        </Link>
                    </li>
                    <li>
                        <Link className={currentRoute === '/Blog' ? "text-teal-500" : "text-stone-600"} href="/Blog">
                            <h2 className="hover:text-teal-500">BLOG</h2>
                        </Link>
                    </li>
                    <li>
                        <Link className={currentRoute === '/Projects' ? "text-teal-500" : "text-stone-600"} href="/Projects">
                            <h2 className="hover:text-teal-500">PROJECTS</h2>
                        </Link>
                    </li>
                    <li>
                        <Link className={currentRoute === '/Contact' ? "text-teal-500" : "text-stone-600"} href="/Contact">
                            <h2 className="hover:text-teal-500">WORK WITH ME </h2>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="Dropdown relative mt-8 w-[20rem] ">
                <button onClick={ () => setIsOpen(!isOpen)} className="flex justify-between p-2 w-full ">
                    <label className="text-teal-500">{getPath(currentRoute)}</label>
                    <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" width="18" height="18"><g id="_01_align_center" data-name="01 align center"><path d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z"/></g></svg>
                </button>
                <div  className={`Dropdown-menu absolute top-12 left-0 p-2 w-full bg-white rounded shadow-lg ${isOpen ? "block" : "hidden"}`}>
                    <ul className=" flex flex-col gap-y-2 w-full  text-stone-600  tracking-[.05em]">
                        <li >
                            <Link onClick={() => setIsOpen(false)} className={currentRoute === '/' ? "text-teal-500" : "text-stone-600"} href="/">
                                <h2 className="hover:text-teal-500">HOME</h2>
                            </Link>
                        </li>
                        <li >
                            <Link onClick={() => setIsOpen(false)} className={currentRoute === '/Blog' ? "text-teal-500" : "text-stone-600"} href="/Blog">
                                <h2 className="hover:text-teal-500">BLOG</h2>
                            </Link>
                        </li>
                        <li >
                            <Link onClick={() => setIsOpen(false)} className={currentRoute === '/Projects' ? "text-teal-500" : "text-stone-600"} href="/Projects">
                                <h2 className="hover:text-teal-500">PROJECTS</h2>
                            </Link>
                        </li>
                        <li >
                            <Link onClick={() => setIsOpen(false)} className={currentRoute === '/Contact' ? "text-teal-500" : "text-stone-600"} href="/Contact">
                                <h2 className="hover:text-teal-500">WORK WITH ME </h2>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}