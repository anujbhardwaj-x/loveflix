
export default function Timeline(){

const memories=[
"We met...",
"We laughed together...",
"Late night talks...",
"I fell for you..."
]

return(
<section className="py-32 text-center">

<h2 className="text-4xl mb-10">Our Story</h2>

{memories.map((m,i)=>(
<div key={i} className="glass p-6 max-w-xl mx-auto mb-6">{m}</div>
))}

</section>
)
}
