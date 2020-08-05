import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='home-div'>
      <div className='home-options'>
        <Link to='/create'><div className='home-option'><h2 id='create-opt'>Create a Review</h2></div></Link>
        <Link to='/reviews'><div className='home-option'><h2 id='read-opt'>Read Reviews: Make a Vendor Connection</h2></div></Link>
      </div>
    </div>
  )
} 

export default Home
