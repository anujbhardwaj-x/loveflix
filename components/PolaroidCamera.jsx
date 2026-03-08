
"use client"
import Webcam from "react-webcam"
import {useRef,useState} from "react"

export default function Camera(){

const ref=useRef(null)
const [img,setImg]=useState(null)

function capture(){
setImg(ref.current.getScreenshot())
}

return(
<div className="text-center py-20">

<h2 className="text-3xl mb-6">Capture Our Moment</h2>

{!img && (
<>
<Webcam ref={ref} screenshotFormat="image/png" className="mx-auto"/>
<button className="neon-btn mt-6" onClick={capture}>Take Polaroid</button>
</>
)}

{img && (
<img src={img} className="w-64 mx-auto"/>
)}

</div>
)
}
