import {useParams} from 'react-router-dom'
import jobs from '../data/jobs'
import {useState} from 'react'

function JobDetails(){

const{id}=useParams()
const[selected]=jobs.filter(job=>job.id===parseInt(id))
const[success,setSuccess]=useState(false)

return(
<div className="details">
<div className="details-card">
<h1>{selected.title}</h1>
<h2>{selected.company}</h2>
<p>{selected.salary}</p>
<p>{selected.type}</p>
<p>{selected.location}</p>
<p>{selected.description}</p>

<button onClick={()=>setSuccess(true)}>Apply Now</button>

{
success&&<div className="success">Application Submitted Successfully!</div>
}
</div>
</div>
)
}
export default JobDetails