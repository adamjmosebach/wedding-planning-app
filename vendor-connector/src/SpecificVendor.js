import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayARecord from './DisplayARecord';

function SpecificVendor() {
  const [vendorTypeSelect, updateVendorTypeSelect] = useState('');
  const [vendorNameSelect, updateVendorNameSelect] = useState('');
  const [allRecords, updateAllRecords] = useState([]);
  const [options, updateOptions] = useState([]);

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
        updateAllRecords(recordsObj.data.records);
      } catch (err) {
        console.log(err);
      }
    }
    apiGet();
  }, []);

  useEffect(() => {
    const newOptions = allRecords.reduce((acc, record) => {
      if (record.fields[vendorTypeSelect] && !acc.includes(record.fields[vendorTypeSelect])) {
        acc.push(record.fields[vendorTypeSelect]);
      }
      return acc;
    }, []);
    updateOptions(newOptions);
  }, [vendorTypeSelect]);

  return (
    <div>
      <select onChange={(e) => updateVendorTypeSelect(e.target.value)}>
        <option value=''>Select a Vendor Type</option>
        <option value='venue'>Venue</option>
        <option value='dj'>DJ</option>
        <option value='photog'>Photographer</option>
        <option value='florist'>Florist</option>
      </select>
      {/* 
      <select onChange={e => updateVendorNameSelect(e.target.value)}> */}

      {/* {specificRecords=['Select a Specific Vendor']} */}

      {/* {allRecords.map(record => {
          if (record.fields[vendorTypeSelect] && !specificRecords.includes(record.fields[vendorTypeSelect])) {
            specificRecords.push(record.fields[vendorTypeSelect])
          }
        })}
        {console.log('specificRecords = ', specificRecords)} */}

      {/* {specificRecords.map(record => <option value={`${record}`}>{`${record}`}</option>)}
      </select> */}

      {options.length >= 0 && (
        <select onChange={(e) => updateVendorNameSelect(e.target.value)}>
          <option value='' selected>Select a Specific Vendor</option>
          {options.map((vendor) => {
            return <option value={vendor}>{vendor}</option>;
          })}
        </select>
      )}

      {/* Displaying records that match criteria */}
      {allRecords.map(
        (record) =>
          record.fields[vendorTypeSelect] === vendorNameSelect && (
            <DisplayARecord record={record} vendorVar={vendorTypeSelect} vendorReview={`${vendorTypeSelect}Review`} vendor='' vendorVisible='visible' />
          )
      )}
    </div>
  );
}

export default SpecificVendor;
