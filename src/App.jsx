import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skill from './components/Skill'
import Sidbar from './components/Sidbar'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <main>
      <Navbar />
      <Home />
      <About/>
      <Skill />
      <Sidbar/>
      <Projects/> 
      <Contact/>
    </main>
  )
}

export default App
