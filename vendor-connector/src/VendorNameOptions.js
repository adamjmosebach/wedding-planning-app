import React from 'react'

function VendorNameOptions(props) {
  return (
    <div>
      {props.options.length >= 0 && (
        <select onChange={(e) => props.updateVendorNameSelect(e.target.value)}>
          <option value='' selected>Select a Specific Vendor</option>
          {props.options.map((vendor) => {
            return <option value={vendor}>{vendor}</option>;
          })}
        </select>
      )}

    </div>
  )
}

export default VendorNameOptions
