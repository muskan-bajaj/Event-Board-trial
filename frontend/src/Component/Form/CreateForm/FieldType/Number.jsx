import React, { useEffect, useState } from 'react'

export default function Number(props) {
  const [number,setNumber]=useState("")
  const fieldName=props.fieldName;
  
  const document={
    fieldName: fieldName,
    value: number
  }

  useEffect(()=>{
    props.setData(document)
  },[number])

  return (
    <div>
        <input type='number' onChange={(e)=>setNumber(e.target.value)} value={number}/>
    </div>
  )
}
