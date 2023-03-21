import React,{ useEffect } from 'react';
import {useNoticeContext} from '../Hooks/useNoticeContext'
import './DashboardPage.css'

import Card from '../NoticeCard/Card';
import Form from '../Form/Form';

export default function DashboardPage() {
  //const [notice, setNotice]=useState(null);
  const {notice,dispatch}=useNoticeContext();

  useEffect(()=>{
    const fetchNotice =async()=>{
        const noticeF=await fetch("/api/notices");
        const noticeJson=await noticeF.json();

        if(noticeF.ok){
          dispatch({type: 'SHOW_ALL_NOTICE', payload: noticeJson})
          //setNotice(noticeJson)
        }
    }
    fetchNotice();
  },[])

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
