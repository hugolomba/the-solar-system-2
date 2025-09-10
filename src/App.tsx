import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { useBodies } from './api/api'
import Footer from './components/Footer'
import BodyDetails from './pages/BodyDetails'
import Test from './components/Test'
import Marquee from './components/Marquee'
import { useContext, useState } from 'react'
import { AppProvider, useApp } from './context/BodiesContext'


function App() {
  // const bodies = useBodies()
  const { bodies } = useApp();
  const [bodyType, setBodyType] = useState<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies">("Planets");
  const [activeOption, setActiveOption] = useState<number | null>(null);
  const options = ["Stars", "Planets", "Dwarf Planets", "Asteroids", "Galaxies"];
 
  return (
    
      
      <div className="h-screen mt-4 flex flex-col justify-between items-center min-h-screen text-center gap-8">
      <Marquee />
      
      {/* {bodies && bodyType === "Stars" && <NavBar bodies={bodies.stars} />}
      {bodies && bodyType === "Planets" && <NavBar bodies={bodies.planets} />}
      {bodies && bodyType === "Dwarf Planets" && <NavBar bodies={bodies.dwarfPlanets} />}
      {bodies && bodyType === "Asteroids" && <NavBar bodies={bodies.asteroids} />}
      {bodies && bodyType === "Galaxies" && <NavBar bodies={bodies.galaxies} />} */}
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
