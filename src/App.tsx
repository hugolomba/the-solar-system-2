import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useApp } from './context/BodiesContext'
import Home from './pages/Home'
import Footer from './components/Footer'
import BodyDetails from './pages/BodyDetails'
import Test from './components/Test'
import Marquee from './components/Marquee'



function App() {
  // const bodies = useBodies()
  const { bodies, error } = useApp();
  const [bodyType, setBodyType] = useState<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies">("Planets");
  const [activeOption, setActiveOption] = useState<number | null>(1);
  const options: Array<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies"> = ["Stars", "Planets", "Dwarf Planets", "Asteroids", "Galaxies"];
 
  return (
    
      
      <div className="flex flex-col justify-center items-center min-h-screen text-center gap-8 p-2  mx-auto">
      {/* <Marquee /> */}
      
     
      <Routes>
      <Route path="/" element={<Home  bodies={bodies} bodyType={bodyType} setBodyType={setBodyType} activeOption={activeOption} setActiveOption={setActiveOption} options={options} error={error} />} />
      <Route path="/body/:bodyName" element={<BodyDetails bodies={bodies} />} />
      <Route path="/test" element={<Test />} />
      </Routes>
      <Footer /> 
    </div>
  

  )
}

export default App
