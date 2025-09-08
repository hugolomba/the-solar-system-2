import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { useBodies } from './api/api'
import Footer from './components/Footer'

function App() {
  const bodies = useBodies()
  console.log("bodies", bodies)
 
  return (
    <div className="h-screen flex flex-col justify-between min-h-screen text-center">
      {bodies && <NavBar planets={bodies.planets} />}
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer /> 
    </div>
  )
}

export default App
