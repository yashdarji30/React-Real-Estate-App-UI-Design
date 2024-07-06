import { useState } from 'react'
import Navbar from "./components/navbar/Navbar";
import "./layout.scss"
import HomePage from './rotes/Hompage/Homepage';
import './App.css'

function App() {
  

  return (
    <div className="layout">
      <div className="navbar">

        <Navbar/>
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App
