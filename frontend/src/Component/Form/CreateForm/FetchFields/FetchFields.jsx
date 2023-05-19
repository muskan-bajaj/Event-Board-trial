import React, { useEffect, useState } from 'react'
import Text from "../FieldType/Text"
import Checkbox from "../FieldType/Checkbox"
import Date from "../FieldType/Date"
import File from "../FieldType/File"
import Number from "../FieldType/Number"
import Radio from "../FieldType/Radio"

export default function FetchFields(props) {
  const [data,setData]=useState({})

  // useEffect(()=>{
    // props.setUserData(data)
  // },[data])

  var document={
    // fieldName: props.event.fieldName,
    // value: data
  }

  useEffect(()=>{
    document={
      fieldName: props.event.fieldName,
      value: data
    }
    console.log(document)
    // props.setUserData(document)
  },[data])

  console.log(document)

  return (
    <div className='viewFieldNameType'>
      {props.event.mandate===true?
      <div className="viewFieldName">
        {props.event.fieldName}*
      </div>
      :
      <div className="viewFieldName">
        {props.event.fieldName}
      </div>}
      
      {(props.event.fieldType==="text")?
      <div className='viewFieldType'>
        {/* <Text onChange={(e)=>props.setUserData(e.target.value)} value={props.userData}/> */}
        {/* <Text userData={props.userData} setUserData={props.setUserData} fieldName={props.event.fieldName}/> */}
        <Text data={data} setData={setData} fieldName={props.event.fieldName}/>
      </div>
      :
      <>
      </>}
      {props.event.fieldType==="checkbox"?
      <div className='viewFieldType'>
        <Checkbox data={data} setData={setData} fieldName={props.event.fieldName}/>
      </div>
      :
      <>
      </>}
      {props.event.fieldType==="date"?
      <div className='viewFieldType'>
        <Date data={data} setData={setData} fieldName={props.event.fieldName}/>
      </div>
      :
      <>
      </>}
      {props.event.fieldType==="file"?
      <div className='viewFieldType'>
        <File data={data} setData={setData} fieldName={props.event.fieldName}/>
      </div>
      :
      <>
      </>}
      {(props.event.fieldType==="number")?
      <div className='viewFieldType'>
        <Number data={data} setData={setData} fieldName={props.event.fieldName}/>
      </div>
      :
      <>
      </>}
      {props.event.fieldType==="radio"?
      <div className='viewFieldType'>
        <Radio data={data} setData={setData} fieldName={props.event.fieldName}/>
      </div>
      :
      <>
      </>}
    </div>
    // Name: {props.event.fieldName} Type: {props.event.fieldType} Mandate: {props.event.mandate}
  )
}
