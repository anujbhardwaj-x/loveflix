
"use client"
import {useState} from "react"
import Confetti from "react-confetti"

export default function Proposal({name}){

const [yes,setYes]=useState(false)

if(yes){
return(
<div className="text-center">
<Confetti/>
<div className="heart">❤️</div>
<h1 className="text-5xl mt-4">{name} said YES</h1>
</div>
)
}

return(
<div className="glass p-12 text-center">

<p className="mb-4 text-pink-300">In every universe, I would choose you.</p>

<h1 className="text-3xl mb-6">
{name}, will you be more than my best friend?
</h1>

<button className="neon-btn mr-4" onClick={()=>setYes(true)}>YES ❤️</button>

<button className="border px-6 py-3 rounded">Just Friends</button>

</div>
)
}
