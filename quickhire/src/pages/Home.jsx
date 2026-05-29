import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Home(){
const[search,setSearch]=useState('')
const navigate=useNavigate()

const handleSearch=()=>{
navigate(`/jobs?search=${search}`)
}

return(
<div className="home">
<div className="hero">
<h1>Find Your Dream Job Today</h1>
<p>Discover top opportunities from leading companies</p>
<input type="text" placeholder="Search jobs..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
<button onClick={handleSearch}>Browse All Jobs</button>
</div>
</div>
)
}
export default Home