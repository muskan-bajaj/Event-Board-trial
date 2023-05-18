import React,{useState} from 'react'
import {Link, generatePath, useNavigate} from "react-router-dom"

export default function Card(props) {
    const redirect=useNavigate();
    const [fillFormModal,setFillFormModal]=useState('')
    const id=props.element._id

    const fetchForm=async()=>{
        // redirect(generatePath("/dashboard/form/:id",{id}))
        // localStorage.setItem("noticeid",id)
        console.log(id)
        
    }

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
                    {/* <Link to="/dashboard/form/"> */}
                        <button className='fillForm' onClick={fetchForm}>FORM</button>
                    {/* </Link> */}
                </div>
            </div>
            <div className='poster'>
                <img className='posterImage' src={props.element.poster} alt="" />
            </div>
        </div>
    </div>
  )
}
