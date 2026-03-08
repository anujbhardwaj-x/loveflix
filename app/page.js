
"use client"
import { useState } from "react"
import NetflixIntro from "../components/NetflixIntro"
import Hero from "../sections/Hero"
import Features from "../sections/Features"
import Timeline from "../sections/Timeline"
import Gallery from "../sections/Gallery"
import Quiz from "../sections/Quiz"
import StartJourney from "../sections/StartJourney"
import Petals from "../components/Petals"
import ShootingStars from "../components/ShootingStars"

export default function Home(){

const [intro,setIntro]=useState(false)

return(

<div>

{!intro && <NetflixIntro finish={()=>setIntro(true)}/>}

{intro && (
<>
<ShootingStars/>
<Petals/>
<Hero/>
<Features/>
<Timeline/>
<Gallery/>
<Quiz/>
<StartJourney/>
</>
)}

</div>

)

}
