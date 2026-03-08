
"use client"
import {useState} from "react"

export default function Gallery(){

const [images,setImages]=useState([])

function upload(e){
const files=[...e.target.files]
setImages(files.map(f=>URL.createObjectURL(f)))
}

return(
<section className="py-32 text-center">

<h2 className="text-4xl mb-6">Memory Gallery</h2>

<input type="file" multiple onChange={upload}/>

<div className="flex flex-wrap justify-center mt-6">
{images.map((i,k)=>(
<img key={k} src={i} className="w-40 m-2 rounded"/>
))}
</div>

</section>
)
}
