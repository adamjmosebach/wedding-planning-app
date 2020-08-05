import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DisplayARecord from './DisplayARecord';

function SpecificVendor() {

const [vendorTypeSelect, updateVendorTypeSelect] = useState('')
const [vendorNameSelect, updateVendorNameSelect] = useState('')
const [specificRecords, updateSpecificRecords] = useState ([])
  

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
      console.log(recordsObj.data.records)
      updateSpecificRecords(recordsObj.data.records);
    } catch (err) {
      console.log(err);
    }
  }
  apiGet();
}, []);

  return (
    <div>
      <select onChange={e => updateVendorTypeSelect(e.target.value)}>
        <option value=''>Select a Vendor Type</option>
        <option value='venue'>Venue</option>
        <option value='dj'>DJ</option>
        <option value='photog'>Photographer</option>
        <option value='florist'>Florist</option>
      </select>

      <select onChange={e => updateVendorNameSelect(e.target.value)}>
        <option value=''>Select a Specific Vendor</option>
        {specificRecords.map(record => {
          return record.fields[vendorTypeSelect] && <option value={record.fields[vendorTypeSelect]}>{record.fields[vendorTypeSelect]}</option>
        })}
      </select>

      {specificRecords.map(record => (
        record.fields[vendorTypeSelect] === vendorNameSelect && <DisplayARecord record={record} vendorVar={vendorTypeSelect} vendorReview={`${vendorTypeSelect}Review`} vendor='' vendorVisible='visible' />
      ))}

    </div>
  )
}
 
export default SpecificVendor
