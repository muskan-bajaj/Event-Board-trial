import React, { useEffect, useState } from 'react'

export default function Radio(props) {
  const [radio,setRadio]=useState("")
  const fieldName=props.fieldName;
  
  const document={
    fieldName: fieldName,
    value: radio
  }

  useEffect(()=>{
    props.setData(document)
  },[radio])

  return (
    <div>
        <input type='radio' onChange={(e)=>setRadio(e.target.value)} value={radio}/>
    </div>
  )
}
