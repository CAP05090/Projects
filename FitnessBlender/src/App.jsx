import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Bottom from './Components/Bottom/bottom'
import FrontPage from './Components/Home/Home'
import FbPass from './Components/fbPlus'
import Program from './Components/Programs/Program'
import Login from './Components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <FrontPage />
      <FbPass />
      <Program />
      <Bottom />
    </>
  )
}

export default App
