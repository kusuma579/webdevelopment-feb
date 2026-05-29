import {Link} from 'react-router-dom'

function JobCard({job}){
return(
<div className="card">
<div className="badge">{job.type}</div>
<h2>{job.title}</h2>
<h3>{job.company}</h3>
<p>{job.salary}</p>
<p>{job.location}</p>
<Link to={`/job/${job.id}`}>
<button>View Details</button>
</Link>
</div>
)
}
export default JobCard