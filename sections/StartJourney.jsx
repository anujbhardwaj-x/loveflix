
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function StartJourney() {

  const [name, setName] = useState("")
  const router = useRouter()

  function startProposal() {
    if (!name) return
    router.push(`/proposal/${name}`)
  }

  return (

    <div className="text-center">

      <h2 className="text-4xl mb-6">Start Your Proposal</h2>

      <div className="glass p-8 max-w-md mx-auto">

        <input
          className="w-full p-3 rounded text-black mb-4"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="neon-btn w-full"
          onClick={startProposal}
        >
          Start Journey ❤️
        </button>

      </div>

    </div>
  )
}
