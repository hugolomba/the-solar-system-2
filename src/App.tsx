import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { useBodies } from './api/api'
import Footer from './components/Footer'
import BodyDetails from './pages/BodyDetails'
import Test from './components/Test'
import Marquee from './components/Marquee'
import { useState } from 'react'


function App() {
  const bodies = useBodies()
  const [bodyType, setBodyType] = useState<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies">("Planets");
  const [activeOption, setActiveOption] = useState<number | null>(null);
  const options = ["Stars", "Planets", "Dwarf Planets", "Asteroids", "Galaxies"];
 
  return (
    

    
    <div className="h-screen flex flex-col justify-between min-h-screen text-center">
      
      <Marquee />
      {bodies && bodyType === "Stars" && <NavBar planets={bodies.stars} />}
      {bodies && bodyType === "Planets" && <NavBar planets={bodies.planets} />}
      {bodies && bodyType === "Dwarf Planets" && <NavBar planets={bodies.dwarfPlanets} />}
      {bodies && bodyType === "Asteroids" && <NavBar planets={bodies.asteroids} />}
      {bodies && bodyType === "Galaxies" && <NavBar planets={bodies.galaxies} />}
      <Routes>
      <Route path="/" element={<Home  bodies={bodies} bodyType={bodyType} setBodyType={setBodyType} activeOption={activeOption} setActiveOption={setActiveOption} options={options} />} />
      <Route path="/body/:bodyName" element={<BodyDetails bodies={bodies} />} />
      <Route path="/test" element={<Test />} />
      </Routes>
      <Footer /> 
    </div>
  )
}

export default App
