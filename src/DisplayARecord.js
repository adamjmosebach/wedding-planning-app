import React from 'react';
import './DisplayARecord.css';

function DisplayARecord(props) {

  // Variables equal props
  const record = props.record.fields;
  const vendorVar = props.vendorVar;
  const vendorReview = props.vendorReview;
  const vendor = props.vendor;
  const vendorVisible = props.vendorVisible;

  // If a cell is not blank, return it
  if (record[vendorReview]) {
    return (

      // Display a record
      <div className={`listing ${vendorVisible}`}>
        <h2>
          {record.name}{' '}
          <a
            href={`mailto:${record.email}?subject=Your%20${record[vendorVar]}%20review%20on%20Vendor%20Connector`}
            className='connect-link'>
            Connect!
          </a>
        </h2>
        <h3>
          {record[vendorVar]} {vendor && `(${vendor})`}
        </h3>
        <p>{record[vendorReview]}</p>
      </div>
    );
  } else {
    return '';
  }
}

export default DisplayARecord;