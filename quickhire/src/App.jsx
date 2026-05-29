import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App(){
return(
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/jobs" element={<Jobs/>}/>
<Route path="/job/:id" element={<JobDetails/>}/>
</Routes>
<Footer/>
</BrowserRouter>
)
}
export default App