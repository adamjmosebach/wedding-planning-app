import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayARecord from './DisplayARecord';
import './SpecificVendor.css';

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
        updateAllRecords(recordsObj.data.records);
      } catch (err) {
        console.log(err);
      }
    }
    apiGet();
  }, []);

  // Make sure names don't repeat in vendor name dropdown
  useEffect(() => {
    updateVendorNameSelect('');
    const newOptions = allRecords.reduce((acc, record) => {
      if (
        record.fields[vendorTypeSelect] &&
        !acc.includes(record.fields[vendorTypeSelect])
      ) {
        acc.push(record.fields[vendorTypeSelect]);
      }
      return acc;
    }, []);
    updateOptions(newOptions);
  }, [vendorTypeSelect]);

  return (
    <div>

      {/* Populate Vendor Type Dropdown */}
      <div className='selects-div'>
        <select
          onChange={(e) => {
            updateVendorNameSelect('');
            updateVendorTypeSelect(e.target.value);
          }}
          className='select'>
          <option value=''>Select a Vendor Type</option>
          <option value='venue'>Venue</option>
          <option value='dj'>DJ</option>
          <option value='photog'>Photographer</option>
          <option value='florist'>Florist</option>
        </select>

        {/* Populate Vendor Name Dropdown */}
        <select
          onChange={(e) => updateVendorNameSelect(e.target.value)}
          value={vendorNameSelect}
          className='select'>
          <option value='' defaultValue>
            Select a Specific Vendor
          </option>
          {options.map((vendor, index) => {
            return (
              <option value={vendor} key={vendor + index}>
                {vendor}
              </option>
            );
          })}
        </select>
      </div>

      {/* Displaying records that match criteria */}
      <div className='specific-results'>
        {allRecords.map(
          (record) =>
            record.fields[vendorTypeSelect] === vendorNameSelect && (
              <DisplayARecord
                record={record}
                vendorVar={vendorTypeSelect}
                vendorReview={`${vendorTypeSelect}Review`}
                vendor=''
                vendorVisible='visible'
                key={record.id}
              />
            )
        )}
      </div>
    </div>
  );
}

export default SpecificVendor;
