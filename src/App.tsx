import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useApp } from './context/BodiesContext'
import Home from './pages/Home'
import Footer from './components/Footer'
import BodyDetails from './pages/BodyDetails'





function App() {
  const { bodies, error, isLoading } = useApp();
  const [bodyType, setBodyType] = useState<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies">("Planets");
  const [activeOption, setActiveOption] = useState<number | null>(1);
  const options: Array<"Stars" | "Planets" | "Dwarf Planets" | "Asteroids" | "Galaxies"> = ["Stars", "Planets", "Dwarf Planets", "Asteroids", "Galaxies"];
 
  return (
    
      
      <div className="flex flex-col justify-center items-center min-h-screen text-center gap-8 p-2 mx-auto max-md:p-0">

      
      
      <Routes>
      <Route path="/" element={<Home  bodies={bodies} bodyType={bodyType} setBodyType={setBodyType} activeOption={activeOption} setActiveOption={setActiveOption} options={options} error={error} isLoading={isLoading} />} />
      <Route path="/body/:bodyName" element={<BodyDetails bodies={bodies} />} />
      </Routes>
      <Footer /> 
    </div>
  

  )
}

export default App
