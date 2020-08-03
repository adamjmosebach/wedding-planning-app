import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Reviews() {
  const [records, updateRecords] = useState([]);

  useEffect(() => {
    async function apiGet() {
      try {
        const recordsObj = await axios.get(
          'https://api.airtable.com/v0/appN3Jd5GDuwUR5wG/Table%201?maxRecords=3&view=Grid%20view',
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
            },
          }
        );
        console.log(recordsObj.data.records);
        updateRecords(recordsObj.data.records);
      } catch (err) {
        console.log(err);
      }
    }
    apiGet();
  }, []);

  function displayRecords(recordInput, vendorVar, vendorReview, vendor) {
    const record = recordInput.fields
    if (record[vendorReview]) {
      return (
        <div>
          <h2>{record.name} / {record.email}</h2>
          <h3>{record[vendorVar]} ({vendor})</h3>
          <p>{record[vendorReview]}</p>
        </div>
      )
    }
  }

  if (records != []) {return (
      <div>
      {records.map(record => (
        <div>
          {displayRecords(record, 'venue', 'venueReview', 'Venue')}
          {displayRecords(record, 'dj', 'djReview', 'DJ')}
          {displayRecords(record, 'photog', 'photogReview', 'Photographer')}
          {displayRecords(record, 'florist', 'floristReview', 'Florist')}
        </div>
        ))}
      </div>
  )} else {
    return <h1>Loading...</h1>;
  }
}

export default Reviews;
