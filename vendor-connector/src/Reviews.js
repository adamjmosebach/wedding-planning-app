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

  if (records != []) {return (
      <div>
        {records.map(record => {return (
            record.fields.venueReview != '' && (
              <div>
                <h2>{record.fields.name} / {record.fields.email}</h2>
                <h3>{record.fields.venue}</h3>
                <p>{record.fields.venueReview}</p>
              </div>
            )
        )})}
      </div>
  )} else {
    return <h1>Loading...</h1>;
  }
}

export default Reviews;
