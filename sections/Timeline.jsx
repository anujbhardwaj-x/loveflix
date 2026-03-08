
export default function Timeline(){

const story=[
{title:"The First Meeting",text:"It started with a simple conversation that neither of us expected would mean so much."},
{title:"Endless Conversations",text:"Late night talks, inside jokes and laughter that made every day better."},
{title:"The Best Friend Phase",text:"Somewhere along the way you became the one person I could not imagine life without."},
{title:"The Realization",text:"One day I realized that what I felt was more than friendship."},
{title:"This Moment",text:"Today I want to ask the question that could start a beautiful new chapter."}
]

return(
<div className="text-center px-6">

<h2 className="text-5xl mb-20 font-bold">
Our Story
</h2>

<div className="space-y-12 max-w-4xl mx-auto">

{story.map((s,i)=>(
<div key={i}
className="glass p-12 rounded-3xl border border-white/20">

<h3 className="text-3xl mb-4">{s.title}</h3>
<p className="text-gray-300 text-lg">{s.text}</p>

</div>
))}

</div>

</div>
)
}
