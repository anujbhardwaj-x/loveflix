
"use client"
import { useState } from "react"

export default function Gallery(){

const [images,setImages] = useState([])

function upload(e){
const files=[...e.target.files]
const urls=files.map(f=>URL.createObjectURL(f))
setImages(urls)
}

return(
<div className="text-center px-6">

<h2 className="text-5xl mb-10 font-bold">
Memories
</h2>

<p className="text-gray-300 mb-10">
Upload photos that represent the journey you share together.
</p>

<input type="file" multiple onChange={upload} className="mb-10"/>

<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

{images.map((img,i)=>(
<img key={i} src={img} className="rounded-xl shadow-xl"/>
))}

</div>

</div>
)
}
