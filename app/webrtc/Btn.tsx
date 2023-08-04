"use client";
export default function Btn(){
  return <button onClick={()=>{
    navigator.mediaDevices.getDisplayMedia({
      audio: false,
      video: true,
    }).then((stream)=>{
      (document.getElementById('show') as HTMLVideoElement).srcObject = stream;
      stream.getVideoTracks()[0].addEventListener('ended', () => {
        //errorMsg('The user has ended sharing the screen');
      });
    }).catch(error=>{
      console.log(error)
    })
  }}>share screen</button>
}