import React, { useEffect, useState } from 'react'

export default function Checkbox(props) {
  const [checkbox,setCheckbox]=useState("")
  const fieldName=props.fieldName;
  
  const document={
    fieldName: fieldName,
    value: checkbox
  }

  useEffect(()=>{
    props.setData(document)
  },[checkbox])

  return (
    <div>
        <input type='checkbox' onChange={(e)=>setCheckbox(e.target.value)} value={checkbox}/>
    </div>
  )
}
