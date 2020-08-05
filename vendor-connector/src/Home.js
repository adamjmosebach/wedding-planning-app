import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='home-options'>
        <Link to='/create'><div className='home-option'><h2>Create a Review</h2></div></Link>
        <Link to='/reviews'><div className='home-option'><h2>Read Reviews: Make a Vendor Connection</h2></div></Link>
      </div>
    </div>
  )
} 

export default Home
