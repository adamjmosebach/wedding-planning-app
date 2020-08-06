import React from 'react'

function FormComponent(props) {

  const updateVendor = props.vendorAction
  const updateReview = props.reviewAction

  // Makes vendor field change its state variable in parent component
  function inputVendorHandler(e) {
    e.preventDefault();
    updateVendor(e.target.value);
  }
  
  // Makes vendorReview field change its state variable in parent component
  function inputReviewHandler(e) {
    e.preventDefault();
    updateReview(e.target.value);
  }

  // Reutrns a venue and venueReview field based on props
  return (
    <div className='form-component'>
      <label htmlFor={props.field} className='labels'><strong>{`${props.field} `}</strong> </label>
        <input type='text' id={props.field} onChange={inputVendorHandler} />
      <p className='small-screen-headings'><strong>{`${props.field} Review`}</strong></p>
      <textarea className='review-field' onChange={inputReviewHandler} />
    </div>
  )
}

export default FormComponent
