import React, { useEffect, useState } from 'react'

export default function File(props) {
  const [file,setFile]=useState("")
  const fieldName=props.fieldName;
  
  const document={
    fieldName: fieldName,
    value: file
  }

  useEffect(()=>{
    props.setData(document)
  },[file])

  return (
    <div>
        <input type='file' onChange={(e)=>setFile(e.target.value)} value={file}/>
    </div>
  )
}
