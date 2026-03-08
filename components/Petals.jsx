
"use client"
import {useEffect} from "react"

export default function Petals(){

useEffect(()=>{

setInterval(()=>{

const el=document.createElement("div")
el.innerHTML="🌸"
el.className="petal"
el.style.left=Math.random()*100+"vw"

document.body.appendChild(el)

setTimeout(()=>el.remove(),8000)

},500)

},[])

return null
}
