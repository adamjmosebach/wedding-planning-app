import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='home-options'>
        <Link to='/create'><div className='home-option'><h2>Create a Review</h2></div></Link>
        <div className='home-option'><h2>Find a Vendor's Reviews</h2></div>
        <div className='home-option'><h2>Browse Reviews</h2></div>
      </div>
    </div>
  )
}

export default Home
