import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css'
import { Route, Link } from 'react-router-dom'
import SpecificVendor from './SpecificVendor'
import DisplayARecord from './DisplayARecord'

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
        //console.log(recordsObj.data.records)
        updateRecords(recordsObj.data.records);
      } catch (err) {
        console.log(err);
      }
    }
    apiGet();
  }, []);


  if (records.length>0) {return (
    <div>

      <label>Venues:<input type='checkbox' id='hideVenue' name='venueCheckbox' value='visible' defaultChecked onChange={e => e.target.checked ? updateVenueVisible('visible') : updateVenueVisible('hidden')} /></label>

      <label> DJs:<input type='checkbox' id='hideDj' name='djCheckbox' value='visible' defaultChecked onChange={e => e.target.checked ? updateDjVisible('visible') : updateDjVisible('hidden')} /></label>

      <label> Photographers:<input type='checkbox' id='hidePhotogs' name='photogsChecked' value='visible' defaultChecked onChange={e => e.target.checked ? updatePhotogVisible('visible') : updatePhotogVisible('hidden')} /></label>

      <label> Florists:<input type='checkbox' id='hideFloriists' name='floristCheckbox' value='visible' defaultChecked onChange={e => e.target.checked ? updateFloristVisible('visible') : updateFloristVisible('hidden')} /></label>
      
      <Link to='/SpecificVendor'>Specific Vendor</Link>
      

      {records.map(record => (
        <div>
          <DisplayARecord record={record} vendorVar='venue' vendorReview='venueReview' vendor='Venue' vendorVisible={venueVisible} />
          <DisplayARecord record={record} vendorVar='dj' vendorReview='djReview' vendor='DJ' vendorVisible={djVisible} />
          <DisplayARecord record={record} vendorVar='photog' vendorReview='photogReview' vendor='Photographer' vendorVisible={photogVisible} />
          <DisplayARecord record={record} vendorVar='florist' vendorReview='floristReview' vendor='Florist' vendorVisible={floristVisible} />
        </div>
      ))}
      
    </div>
  )} else {
    return <h1>Loading...</h1>;
  }
}

export default Reviews;
