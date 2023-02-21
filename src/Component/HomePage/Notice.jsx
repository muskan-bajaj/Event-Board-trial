import React from 'react'
import "./Notice.css"

import { noticeDetails } from "../../Data/noticeDetails"

export default function Notice() {
  return (
    <div className='background'>
    {noticeDetails.map((data) => {
        return (
            <div className='card'>
                <div className='content'>
                    <div className='description'>
                        <div className="societyLogo">
                            <img className='image' src={data.logo} alt=''/>
                        </div>
                        <div className="details">
                            <div className="eventName">
                                {data.eventName}
                            </div>
                            <div className="eventDes">
                                {data.eventDes}
                            </div>
                        </div>
                    </div>
                    <div className="date">
                        {data.date}
                    </div>
                </div>
                <div className='poster'>
                    <img className='posterImage' src={data.poster} alt="" />
                </div>
            </div>
        );
    })}
    </div>
    
  )
}
