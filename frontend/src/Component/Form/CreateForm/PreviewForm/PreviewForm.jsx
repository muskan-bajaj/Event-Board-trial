import React from 'react'
import FetchFields from "../FetchFields/FetchFields"

export default function PreviewForm(props) {
  return (
    <div>
      <div>
        <div>
          FORM NAME:
        </div>
        <div>
          {props.formName}
        </div>
      </div>
      <div>
        <div>
          FORM DES:
        </div>
        <div>
          {props.formDes}
        </div>
      </div>
      <div>
        <div>
          FIELDS:
        </div>
        <div>
          {props.fields.map((e)=>(
            <FetchFields event={e}/>
          ))}
        </div>
      </div>
    </div>
  )
}
