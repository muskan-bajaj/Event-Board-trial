import React from 'react'
import Text from "../FieldType/Text"
import Checkbox from "../FieldType/Checkbox"
import Date from "../FieldType/Date"
import File from "../FieldType/File"
import Number from "../FieldType/Number"
import Radio from "../FieldType/Radio"

export default function FetchFields(props) {
  // console.log(props.event.mandate)
  return (
    <div className='viewFieldNameType'>
      {props.event.mandate===true?
      <>
        {props.event.fieldName}*
      </>
      :
      <div className="viewFieldName">
        {props.event.fieldName}
      </div>}
      
      {(props.event.fieldType==="text")?
      <div className='viewFieldType'>
        <Text/>
      </div>
      :
      <>
      </>}
      {props.event.fieldType==="checkbox"?
      <div className='viewFieldType'>
        <Checkbox/>
      </div>
      :
      <>
      </>}
      {props.event.fieldType==="date"?
      <div className='viewFieldType'>
        <Date/>
      </div>
      :
      <>
      </>}
      {props.event.fieldType==="file"?
      <div className='viewFieldType'>
        <File/>
      </div>
      :
      <>
      </>}
      {(props.event.fieldType==="number")?
      <div className='viewFieldType'>
        <Number/>
      </div>
      :
      <>
      </>}
      {props.event.fieldType==="radio"?
      <div className='viewFieldType'>
        <Radio/>
      </div>
      :
      <>
      </>}
    </div>
    // Name: {props.event.fieldName} Type: {props.event.fieldType} Mandate: {props.event.mandate}
  )
}
