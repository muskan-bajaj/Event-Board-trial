import React from 'react'

export default function Card(props) {
  return (
    <div>
        <div className='card'>
            <div className='content'>
                <div className='description'>
                    <div className="societyLogo">
                        <img className='image' src={props.element.logo} alt=''/>
                    </div>
                    <div className="details">
                        <div className="eventName">
                            {props.element.eventName}
                        </div>
                        <div className="eventDes">
                            {props.element.eventDes}
                        </div>
                    </div>
                </div>
                <div className="date">
                    {props.element.date}
                </div>
            </div>
            <div className='poster'>
                <img className='posterImage' src={props.element.poster} alt="" />
            </div>
        </div>
    </div>
  )
}
