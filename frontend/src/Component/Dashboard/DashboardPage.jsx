import React,{ useState, useEffect,createContext } from 'react';
// import { AuthContext } from '../Context/Context';

import './DashboardPage.css'

import Card from '../NoticeCard/Card';
import Form from '../Form/NoticeForm/NoticeForm';

export default function DashboardPage() {
  const [notice, setNotice]=useState(null);
  // const authContextValue=createContext(AuthContext);
  const id=localStorage.getItem('id');
  var objectArray=[];

  useEffect(()=>{
    const fetchNotice =async()=>{
        const noticeF=await fetch("/api/notices");
        const noticeJson=await noticeF.json();
        for(var i=0;i<noticeJson.length;i++){
          for(var element in noticeJson[i]){
            if(element==='id'){
              if(noticeJson[i][element]===id){
                if(noticeF.ok){
                  objectArray.push(noticeJson[i])
                }
              }
            }
          }
        }
        setNotice(objectArray)
    }
    fetchNotice();
  },[notice])

  return (
    <div>
        <div className="dashboard">
          <div className="notices">
            <div className="heading">
              <h1>Welcome!</h1>
            </div>
            {notice && notice.map((data)=>{
              return(
                <div className="cardElement">
                  <Card key={data._id} element={data}/>
                  </div>
              );
            })}
          </div>
            <Form/>
          <div>
          </div>
      </div>
    </div>
  )
}
