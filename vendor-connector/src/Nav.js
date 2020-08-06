import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from './images/logo-diamond-full.png'

function Nav() {
  return (
    <div className='navBar'>
      <Link to='/'><img src={logo} className='logo' alt='logo'/></Link>
      {/* <img src={'images/Me.jpg'}/> */}
       
    </div>
  )
}

export default Nav
