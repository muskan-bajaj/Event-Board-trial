import React from 'react'
import { useState,useEffect } from 'react';
import './DashboardPage.css'

// import { noticeDetails } from "../../Data/noticeDetails"
import Card from '../NoticeCard/Card';

export default function DashboardPage() {
  const [notice, setNotice]=useState(null);

  useEffect(()=>{
    const fetchNotice =async()=>{
        const noticeF=await fetch("/api/notices");
        const noticeJson=await noticeF.json();

        if(noticeF.ok){
          setNotice(noticeJson)
        }
    }
    fetchNotice();
  },[])

  return (
    <div>
        <div className="dashboard">
          <div className="notices">
            <div className="heading">
              <h1>Hello David</h1>
              {/* <h3>Welcome Back!</h3> */}
            </div>
            {notice && notice.map((data)=>{
              return(
                <div className="cardElement">
                  <Card key={data._id} element={data}/>
                  </div>
              );
            })}
            {/* {noticeDetails.map((data) => {
              return (
                <div className="cardElement">
                  <Card element={data}/>
                </div>
              );
            })} */}
          </div>
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
      </div>
    </div>
  )
}
