import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Contact from './component/section/contact.jsx'
import Project from './component/section/Project.jsx'
import About from './component/section/About.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Navbar/>
     
   
    </>
  )
}

export default App
