import {Link} from 'react-router-dom'

function Navbar(){
return(
<nav className="navbar">
<h1>QuickHire</h1>
<div>
<Link to="/">Home</Link>
<Link to="/jobs">Jobs</Link>
</div>
</nav>
)
}
export default Navbar