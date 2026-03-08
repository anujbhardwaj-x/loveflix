
"use client"
import {useEffect} from "react"

export default function CursorMagic(){

useEffect(()=>{

const sparkle=(e)=>{

const el=document.createElement("div")
el.innerHTML="❤️"
el.style.position="fixed"
el.style.left=e.clientX+"px"
el.style.top=e.clientY+"px"

document.body.appendChild(el)

setTimeout(()=>el.remove(),500)

}

window.addEventListener("mousemove",sparkle)
return()=>window.removeEventListener("mousemove",sparkle)

},[])

return null
}
