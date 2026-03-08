
"use client"
import { useParams } from "next/navigation"
import Heart3D from "../../../components/Heart3D"
import AILetter from "../../../components/AILetter"
import Proposal from "../../../components/Proposal"
import Camera from "../../../components/PolaroidCamera"
import LoveReel from "../../../components/LoveReel"

export default function Page(){

const {name}=useParams()

return(
<div className="min-h-screen flex flex-col items-center justify-center">

<Heart3D/>
<AILetter name={name}/>
<Proposal name={name}/>
<Camera/>
<LoveReel/>

</div>
)
}
