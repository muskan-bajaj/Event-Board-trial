import React,{ useState,useEffect } from 'react'
import "./Notice.css"

import { noticeDetails } from "../../Data/noticeDetails"
import Card from '../NoticeCard/Card';

export default function Notice() {

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
    <div className='background'>
      {notice && notice.map((data)=>{
              return(
                <div className="cardElementHome">
                  <Card key={data._id} element={data}/>
                </div>
              );
            })}
    </div>
    
  )
}
