
"use client"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-center gap-8 p-4 bg-black/40 backdrop-blur-md z-50 text-white">
      <a href="#hero">Home</a>
      <a href="#features">Features</a>
      <a href="#timeline">Story</a>
      <a href="#gallery">Memories</a>
      <a href="#quiz">Quiz</a>
      <a href="#start">Propose</a>
    </nav>
  )
}
