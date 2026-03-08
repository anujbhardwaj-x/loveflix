
"use client"
import {useState} from "react"

const questions=[
"Who sends more memes?",
"Who overthinks more?",
"Who fell first?"
]

export default function Quiz(){

const [i,setI]=useState(0)

return(
<section className="py-32 text-center">

<h2 className="text-4xl mb-6">Memory Quiz</h2>

<div className="glass p-8 max-w-md mx-auto">

<p className="mb-4">{questions[i]}</p>

<button className="neon-btn" onClick={()=>setI((i+1)%questions.length)}>Answer ❤️</button>

</div>

</section>
)
}
