
"use client"
import {Canvas} from "@react-three/fiber"

export default function Heart3D(){

return(
<div style={{height:"250px",width:"250px"}}>
<Canvas>
<ambientLight/>
<mesh>
<sphereGeometry args={[1,32,32]} />
<meshStandardMaterial color="hotpink"/>
</mesh>
</Canvas>
</div>
)
}
