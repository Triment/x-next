'use client';
import { createRef, useEffect } from "react";

export default function Page(){
  const display = createRef<HTMLVideoElement>()
  useEffect(()=>{
    display.current!.onclick = (e)=>{
      console.log(e.clientX)
    }
    navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: true,
    }).then((stream)=>{
      console.log(stream);
      (document.getElementById('show') as HTMLVideoElement).srcObject = stream;
      stream.getVideoTracks()[0].addEventListener('ended', () => {
        //errorMsg('The user has ended sharing the screen');
      });
    }).catch(error=>{
      console.log(error)
    })
  })
  
  return <div className=" grid grid-cols-2">
    <div className=" flex flex-col">
      <video autoPlay playsInline muted id="show" width={1000} height={500} ref={display}>

      </video>
    </div>
  </div>
}