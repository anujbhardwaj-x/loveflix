
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function StartJourney(){

const [name,setName]=useState("")
const router = useRouter()

function start(){
if(!name) return
router.push(`/proposal/${name}`)
}

return(
<div className="text-center px-6">

<h2 className="text-5xl mb-8 font-bold">
Ready for the Proposal?
</h2>

<p className="text-gray-300 mb-10">
Enter your name to begin the final cinematic moment.
</p>

<div className="glass p-10 max-w-md mx-auto">

<input
className="w-full p-3 rounded text-black mb-4"
placeholder="Enter your name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<button className="neon-btn w-full py-4 text-lg"
onClick={start}>
Begin Proposal ❤️
</button>

</div>

</div>
)
}
