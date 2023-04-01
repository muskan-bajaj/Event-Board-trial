import React from 'react'
import { useState } from 'react'
import { useNoticeContext } from '../Hooks/useNoticeContext'
// import { useNoticeContext } from '../Hooks/useAuthContext'
import "./Form.css"

export default function Form() {
    const {dispatch}=useNoticeContext()
    const [eventName,setName]=useState("")
    const [eventDes,setDes]=useState("")
    const [date,setDate]=useState("")
    const [poster,setPoster]=useState("")
    const [error,setError]=useState(null)

    const sumbitFunction=async(e)=>{
        // e.preventDefault()
        const notice={eventName,eventDes,date,poster}
        const response=await fetch("/api/notices",{
            method:'POST',
            body:JSON.stringify(notice),
            headers:{
                "Content-Type":"application/json"
            }
        })

        const json=await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setName("")
            setDes("")
            setDate("")
            setPoster("")
            setError(null)
            //console.log(json)
            dispatch({type:'FETCH_ALL_NOTICE',payload:json})
        }
    }

  return (
    <div className="form">
        <div className="formHeading">
            Create new event
        </div>
        <div className="eventNameF">
            <label className='inputHeading'>Event Name:</label>
            <input type="text" placeholder="Enter event name" onChange={(e)=>setName(e.target.value)} value={eventName} />
        </div>
        <div className="eventDesF">
            <label className='inputHeading'>Event Description:</label>
            <input type="text" placeholder="Enter description of event" onChange={(e)=>setDes(e.target.value)} value={eventDes}/>
        </div>
        <div className="dateF">
            <label className='inputHeading'>Event Date:</label>
            <input type="text" placeholder='Event date' onChange={(e)=>setDate(e.target.value)} value={date} />
        </div>
        <div className="posterF">
            <label className='inputHeading'>Event Poster:</label>
            <input type="url" placeholder='Link of event poster' onChange={(e)=>setPoster(e.target.value)} value={poster} />
        </div>
        <button className='createNotice' onClick={sumbitFunction}>Create Notice</button>
    </div>
  )
}
