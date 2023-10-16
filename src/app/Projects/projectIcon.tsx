import React from 'react'

interface projectProps {
    link : string;
    img : string;
    desc : string;

}
export default function projectIcon(props : projectProps) {
  return (
    <div className="flex flex-col md:max-w-[18rem] max-w-[10rem] justify-center items-center">
      <a href={props.link} target='_blank'> <img src={props.img} className="sm:h-[16rem] h-[8rem]" alt='pic'></img> </a>
      <p>{props.desc}</p>
    </div>
  )
}