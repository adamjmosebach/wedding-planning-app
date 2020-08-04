import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css'

function Reviews() {
  const [records, updateRecords] = useState([]);
  const [venueVisible, updateVenueVisible] = useState('visible');
  const [djVisible, updateDjVisible] = useState('visible');
  const [photogVisible, updatePhotogVisible] = useState('visible');
  const [floristVisible, updateFloristVisible] = useState('visible');

  // Get the records from Airtable
  useEffect(() => {
    async function apiGet() {
      try {
        const recordsObj = await axios.get(
          'https://api.airtable.com/v0/appN3Jd5GDuwUR5wG/Table%201?&view=Grid%20view',
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            },
          }
        );
        updateRecords(recordsObj.data.records);
      } catch (err) {
        console.log(err);
      }
    }
    apiGet();
  }, []);

  // Helper function to display a review
  function displayRecords(recordInput, vendorVar, vendorReview, vendor, vendorVisible) {
    const record = recordInput.fields
    if (record[vendorReview]) {
      return (
        <div className={`${vendorVisible}`}>
          <h2>{record.name} / <a href={`mailto:${record.email}?subject=Your%20${record[vendorVar]}%20review%20on%20Vendor%20Connector`}>{record.email}</a></h2>
          <h3>{record[vendorVar]} ({vendor})</h3>
          <p>{record[vendorReview]}</p>
        </div>
      )
    }
  }

  // If records exist, call displayRecords() to display records for each kind of vendor &
  if (records !== []) {return (
    <div>
      <label>Venues:<input type='checkbox' id='hideVenue' name='venueCheckbox' value='visible' defaultChecked onChange={e => e.target.checked ? updateVenueVisible('visible') : updateVenueVisible('hidden')} /></label>

      <label> DJs:<input type='checkbox' id='hideDj' name='djCheckbox' value='visible' defaultChecked onChange={e => e.target.checked ? updateDjVisible('visible') : updateDjVisible('hidden')} /></label>

      <label> Photographers:<input type='checkbox' id='hidePhotogs' name='photogsChecked' value='visible' defaultChecked onChange={e => e.target.checked ? updatePhotogVisible('visible') : updatePhotogVisible('hidden')} /></label>

      <label> Florists:<input type='checkbox' id='hideFloriists' name='floristCheckbox' value='visible' defaultChecked onChange={e => e.target.checked ? updateFloristVisible('visible') : updateFloristVisible('hidden')}/></label>
      
      {records.map(record => (
        <div>
          {displayRecords(record, 'venue', 'venueReview', 'Venue', venueVisible)}
          {displayRecords(record, 'dj', 'djReview', 'DJ', djVisible)}
          {displayRecords(record, 'photog', 'photogReview', 'Photographer', photogVisible)}
          {displayRecords(record, 'florist', 'floristReview', 'Florist', floristVisible)}
        </div>
        ))}
      </div>
  )} else {
    return <h1>Loading...</h1>;
  }
}

export default Reviews;
