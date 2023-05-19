import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/Context';

export default function Text(props) {
  const authContextValue=useContext(AuthContext);

  const [text,setText]=useState("")
  // const fieldName=props.fieldName;
  
  // const document={
  //   fieldName: fieldName,
  //   value: text
  // }

  // useEffect(()=>{
  //   props.setData(document)
  // },[text])

  useEffect(()=>{
    props.setData(text)
  },[text])

  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
    </div>
  )
}
