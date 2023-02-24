import React from 'react'
import "./Notice.css"

import { noticeDetails } from "../../Data/noticeDetails"
import Card from '../NoticeCard/Card';

export default function Notice() {
  return (
    <div className='background'>
    {noticeDetails.map((data) => {
        return (
            <Card element={data}/>
        );
    })}
    </div>
    
  )
}
