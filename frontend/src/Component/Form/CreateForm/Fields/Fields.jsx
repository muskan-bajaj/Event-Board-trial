import React from 'react'

import './Fields.css'

export default function Fields() {
  return (
    <div className='registrationField'>
        <div className="fieldName">
            <label htmlFor="fname" className='FN'>Field Name:</label>
            <input type="text" id='fname' />
        </div>
        <div className="fieldDataType">
            <label htmlFor="fDataType" className='FDT'>Field Data Type:</label>
            <select name="dataType" id="fDataType">
                <option value="">Select data type</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="checkbox">Checkbox</option>
                <option value="file">File</option>
                <option value="radio">Radio</option>
                <option value="date">Date</option>
            </select>
        </div>
        <div className="fieldMandate">
            <input type="checkbox" id='fmandate'/>
            <label htmlFor="fmandate" className='FM'>* Field is mandatory</label>
        </div>
    </div>
  )
}
