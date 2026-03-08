
"use client"

import { useEffect, useState } from "react"

export default function NetflixIntro({ finish }) {

const [started,setStarted] = useState(false)

useEffect(()=>{

if(!started) return

const audio = new Audio("/sounds/tudum.mp3")
audio.volume = 0.9
audio.play().catch(()=>{})

setTimeout(()=>{
finish()
},3000)

},[started])

return(
<div
className="fixed inset-0 bg-black flex items-center justify-center z-50"
onClick={()=>setStarted(true)}
>

<h1 className="text-red-600 text-8xl font-extrabold tracking-widest animate-pulse">
Love &lt;3
</h1>

</div>
)
}
