import { useState } from 'react'
import './App.css'
import Info from "./Info.jsx"
import About from "./About.jsx"
import Interests from "./Interests"
import Footer from "./Footer.jsx"

function App() {
  return (
    <div className="app">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
