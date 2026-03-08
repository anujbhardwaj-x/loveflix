
"use client"

import { useState } from "react"
import NetflixIntro from "../components/NetflixIntro"

import Hero from "../sections/Hero"
import Features from "../sections/Features"
import Timeline from "../sections/Timeline"
import Gallery from "../sections/Gallery"
import Quiz from "../sections/Quiz"
import StartJourney from "../sections/StartJourney"

export default function Home() {

  const [introDone, setIntroDone] = useState(false)

  return (

    <div>

      {!introDone && (
        <NetflixIntro finish={() => setIntroDone(true)} />
      )}

      {introDone && (
        <>

          <section id="hero">
            <Hero />
          </section>

          <section id="features" className="py-32">
            <Features />
          </section>

          <section id="timeline" className="py-32">
            <Timeline />
          </section>

          <section id="gallery" className="py-32">
            <Gallery />
          </section>

          <section id="quiz" className="py-32">
            <Quiz />
          </section>

          <section id="start" className="py-32">
            <StartJourney />
          </section>

        </>
      )}

    </div>

  )
}
