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

  //reutrns a venue and venueReview field
  return (
    <div>
      <label htmlFor={props.field}>{props.field}
        <input type='text' id={props.field} onChange={inputVendorHandler} />
      </label>
      <textarea className='review-field' onChange={inputReviewHandler} />
    </div>
  )
}

export default FormComponent
