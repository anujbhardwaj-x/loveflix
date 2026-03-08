"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

export default function NetflixIntro({ finish }) {

useEffect(() => {

const audio = new Audio("/sounds/tudum.mp3")
audio.volume = 0.7
audio.play()

setTimeout(() => {
finish()
}, 3200)

}, [])

return (

<div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">

{/* Left bar */}
<motion.div
initial={{ height: 0 }}
animate={{ height: "200px" }}
transition={{ duration: 0.6 }}
className="w-6 bg-red-600 absolute left-[45%]"
/>

{/* Diagonal bar */}
<motion.div
initial={{ height: 0, rotate: 20 }}
animate={{ height: "200px", rotate: 20 }}
transition={{ duration: 0.6, delay: 0.3 }}
className="w-6 bg-red-600 absolute"
/>

{/* Right bar */}
<motion.div
initial={{ height: 0 }}
animate={{ height: "200px" }}
transition={{ duration: 0.6, delay: 0.6 }}
className="w-6 bg-red-600 absolute right-[45%]"
/>

</div>

)

}