import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { usePlanets } from './api/api'

function App() {
  const planets = usePlanets()
  return (
    <>
      {planets && <NavBar planets={planets} />}
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
