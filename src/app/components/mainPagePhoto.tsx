import React from 'react'


interface MyImageProps {
    desc : string;
    src : string;
}
export default function mainPagePhoto(props : MyImageProps) {
  return (
    /* image carousel*/
    <div>
        <img src={props.src} alt={props.desc}/>
    </div>
  )
}

