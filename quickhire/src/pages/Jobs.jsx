import jobs from '../data/jobs'
import JobCard from '../components/JobCard'
import {useLocation} from 'react-router-dom'
import {useState} from 'react'

function Jobs(){

const location=useLocation()
const query=new URLSearchParams(location.search)
const search=query.get('search')||''

const[filter,setFilter]=useState('All')

const filteredJobs=jobs.filter(job=>{
const matchesSearch=job.title.toLowerCase().includes(search.toLowerCase())
const matchesFilter=filter==='All'||job.type===filter||job.location===filter
return matchesSearch&&matchesFilter
})

return(
<div className="jobs-page">
<h1>Available Jobs</h1>

<div className="filters">
<button onClick={()=>setFilter('All')}>All</button>
<button onClick={()=>setFilter('Remote')}>Remote</button>
<button onClick={()=>setFilter('Full-Time')}>Full-Time</button>
</div>

<div className="job-grid">
{
filteredJobs.length>0?
filteredJobs.map(job=><JobCard key={job.id} job={job}/>)
:
<h2>No Jobs Found</h2>
}
</div>
</div>
)
}
export default Jobs