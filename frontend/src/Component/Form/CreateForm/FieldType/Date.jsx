import React, { useEffect, useState } from 'react'

export default function Date(props) {
  const [date,setDate]=useState("")
  const fieldName=props.fieldName;
  
  const document={
    fieldName: fieldName,
    value: date
  }

  useEffect(()=>{
    props.setData(document)
  },[date])

  return (
    <div>
        <input type='date' onChange={(e)=>setDate(e.target.value)} value={date}/>
    </div>
  )
}
