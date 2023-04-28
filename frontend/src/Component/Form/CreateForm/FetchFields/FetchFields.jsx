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
    <>
      {props.event.mandate===true?
      <>
        {props.event.fieldName}*
      </>
      :
      <>
        {props.event.fieldName}
      </>}
      {(props.event.fieldType==="text")?
      <>
        <Text/>
      </>
      :
      <>
      </>}
      {props.event.fieldType==="checkbox"?
      <>
        <Checkbox/>
      </>
      :
      <>
      </>}
      {props.event.fieldType==="date"?
      <>
        <Date/>
      </>
      :
      <>
      </>}
      {props.event.fieldType==="file"?
      <>
        <File/>
      </>
      :
      <>
      </>}
      {(props.event.fieldType==="number")?
      <>
        <Number/>
      </>
      :
      <>
      </>}
      {props.event.fieldType==="radio"?
      <>
        <Radio/>
      </>
      :
      <>
      </>}
    </>
    // Name: {props.event.fieldName} Type: {props.event.fieldType} Mandate: {props.event.mandate}
  )
}
