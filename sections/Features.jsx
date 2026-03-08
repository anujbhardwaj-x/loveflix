
export default function Features(){

const features=[
{title:"Cinematic Proposal",icon:"🎬",desc:"A dramatic reveal inspired by movie storytelling with animations and sound."},
{title:"Memory Capture",icon:"📸",desc:"Take a polaroid picture during the moment and save the memory forever."},
{title:"Interactive Quiz",icon:"🎮",desc:"Fun questions about your friendship before unlocking the proposal."},
{title:"Magical Atmosphere",icon:"🌌",desc:"Disney-inspired starry environment with glowing particles and romantic visuals."}
]

return(
<div className="text-center px-6">

<h2 className="text-5xl mb-20 font-bold">
Features
</h2>

<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

{features.map((f,i)=>(

<div key={i}
className="glass p-12 rounded-3xl border border-white/20 hover:scale-105 transition duration-300">

<div className="text-6xl mb-6">{f.icon}</div>

<h3 className="text-3xl font-semibold mb-4">{f.title}</h3>

<p className="text-gray-300 text-lg">{f.desc}</p>

</div>

))}

</div>

</div>
)
}
