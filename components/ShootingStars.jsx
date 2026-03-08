
export default function ShootingStars(){
return(
<>
{Array.from({length:10}).map((_,i)=>(
<div key={i} className="shooting-star" style={{top:Math.random()*100+"vh",left:Math.random()*100+"vw"}}></div>
))}
</>
)
}
