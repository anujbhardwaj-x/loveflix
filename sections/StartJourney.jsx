
"use client"
import {useState} from "react"
import {useRouter} from "next/navigation"

export default function StartJourney(){

const [name,setName]=useState("")
const router=useRouter()

return(
<section className="py-32 text-center">

<h2 className="text-4xl mb-6">Start Your Journey</h2>

<div className="glass p-8 max-w-md mx-auto">

<input
className="w-full p-3 rounded text-black mb-4"
placeholder="Enter your name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<button className="neon-btn w-full" onClick={()=>router.push(`/proposal/${name}`)}>
Start Journey ❤️
</button>

</div>

</section>
)
}
