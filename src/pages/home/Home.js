import React from 'react'
import './Home.css'
import Navbar from '../../components/navBar/NavBar'
import Card from '../../components/card/Card'

function App () {
  return (
    <div className="main-container">
      <Navbar/>

      <Card />
    </div>
  )
}

export default App
