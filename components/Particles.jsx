
"use client"
import { useEffect } from "react"

export default function Particles(){

useEffect(()=>{

const createParticle = () => {

const p = document.createElement("div")
p.className = "particle"
p.style.left = Math.random()*100+"vw"
p.style.animationDuration = 6 + Math.random()*6 + "s"

document.body.appendChild(p)

setTimeout(()=>{
p.remove()
},12000)

}

setInterval(createParticle,500)

},[])

return null

}
