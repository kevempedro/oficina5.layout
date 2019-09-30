import React from 'react'
import Logo from '../../assets/logo.png'
import './NavBar.css'

export default function NavBar () {
  return (
    <div className="navBar">
      <img src={Logo} alt="Logo" />
    </div>
  )
}
