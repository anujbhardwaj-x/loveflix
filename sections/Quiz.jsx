
"use client"
import { useState } from "react"

const questions=[
"Who usually sends the first meme of the day?",
"Who takes longer to reply to messages?",
"Who started liking the other person first?",
"Who overthinks more about everything?"
]

export default function Quiz(){

const [index,setIndex]=useState(0)

return(
<div className="text-center px-6">

<h2 className="text-5xl mb-10 font-bold">
Memory Quiz
</h2>

<p className="text-gray-300 mb-12">
Answer these fun questions before revealing the final proposal.
</p>

<div className="glass p-12 max-w-xl mx-auto">

<h3 className="text-2xl mb-8">{questions[index]}</h3>

<button className="neon-btn px-10 py-4"
onClick={()=>setIndex((index+1)%questions.length)}>
Next Question
</button>

</div>

</div>
)
}
