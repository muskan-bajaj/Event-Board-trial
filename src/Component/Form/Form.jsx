import React from 'react'

export default function Form() {
  return (
    <div className="form">
        <div className="formHeading">
            Create new event
        </div>
        <div className="eventNameF">
            <span className='inputHeading'>Event Name:</span>
            <input type="text" placeholder="Enter event name" />
        </div>
        <div className="eventDesF">
            <span className='inputHeading'>Event Description:</span>
            <input type="text" placeholder="Enter description of event"/>
        </div>
        <div className="dateF">
            <span className='inputHeading'>Event Date:</span>
            <input type="text" placeholder='Event date' />
        </div>
    </div>
  )
}
