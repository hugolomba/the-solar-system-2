import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { useBodies } from './api/api'
import Footer from './components/Footer'
import BodyDetails from './pages/BodyDetails'
import Test from './components/Test'
import Marquee from './components/Marquee'

function App() {
  const bodies = useBodies()
 
  return (

    
    <div className="h-screen flex flex-col justify-between min-h-screen text-center">
      <Marquee />
      {bodies && <NavBar planets={bodies.planets} />}
      <Routes>
      <Route path="/" element={<Home bodies={bodies} />} />
      <Route path="/body/:bodyName" element={<BodyDetails bodies={bodies} />} />
      <Route path="/test" element={<Test />} />
      </Routes>
      <Footer /> 
    </div>
  )
}

export default App
