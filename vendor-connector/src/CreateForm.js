import React, { useState } from 'react'
import ReviewForm from './ReviewForm'
import axios from 'axios'

function CreateForm() {

  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');

  const [venue, updateVenue] = useState('');
  const [dj, updateDj] = useState('');
  const [photog, updatePhotog] = useState('');
  const [florist, updateFlorist] = useState('');

  const [venueReview, updateVenueReview] = useState('');
  const [djReview, updateDjReview] = useState('');
  const [photogReview, updatePhotogReview] = useState('');
  const [floristReview, updateFloristReview] = useState('');

  // Updates state values according to inputs
  function inputHandler(e, action) {
    e.preventDefault();
    action(e.target.value);
  }

  // Validates name and email. If correct, calls apiPost()
  function submitHandler(e) {
    e.preventDefault();
    if (name != '') {
      if (email.includes('@') && email.includes('.')) {
        apiPost();
      } else {
        alert('Must provide valid email')
      }
    } else {
      alert('Must provide your name')
    }
  }

  async function apiPost() {
    try {
      const sendData = await axios.post('https://api.airtable.com/v0/appN3Jd5GDuwUR5wG/Table%201', {
        fields: {
          name: name,
          email: email,
          venue: venue,
          venueReview: venueReview,
          dj: dj,
          djReview: djReview,
          photog: photog,
          photogReview: photogReview,
          florist: florist,
          floristReview: floristReview
        }
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          'Content-Type': 'application/json'
        }
      })
      console.log(sendData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='name-email-fields'>
          <label htmlFor='name'>Name:<input type='text' id='name' onChange={e=>inputHandler(e,updateName)} /></label>
          <label htmlFor='email'>Email:<input type='text' id='email' onChange={e=>inputHandler(e,updateEmail)} /></label>
        </div>
        <div className='vedor-fields'>
          <ReviewForm field='Venue' vendorAction={updateVenue} reviewAction={updateVenueReview} />
          <ReviewForm field='DJ' vendorAction={updateDj} reviewAction={updateDjReview} />
          <ReviewForm field='Photography' vendorAction={updatePhotog} reviewAction={updatePhotogReview} />
          <ReviewForm field='Florist' vendorAction={updateFlorist} reviewAction={updateFloristReview} />
        </div>
        <input type='submit' value='Post My Reviews'/>
      </form>
    </div>
  )
}

export default CreateForm
