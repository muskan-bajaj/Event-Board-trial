import React, { useEffect, useState } from "react";
import FetchFields from "../Form/CreateForm/FetchFields/FetchFields";

import "./ViewForm.css";

export default function ViewForm(props) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    for (var i = 0; i < props.formFields.length; i++) {
      userData[props.formFields[i].fieldName] = "";
    }
  }, []);

  const submitForm = async () => {
    console.log(userData);
    // await fetch("/api/formData", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const json = await response.json();

    // if (!response.ok) {
    //   setError(json.error);
    // }
    // if (response.ok) {
    //   setName("");
    //   setDes("");
    //   setDate("");
    //   setPoster("");
    //   setError(null);
    // }
  };
  return (
    <div className="viewForm">
      <div className="viewName">{props.name}</div>
      <div className="viewDes">{props.description}</div>
      <div className="viewField">
        {props.formFields.map((e) => (
          <FetchFields
            event={e}
            userData={userData}
            setUserData={setUserData}
          />
        ))}
      </div>
      <div className="viewSubmit">
        <button onClick={submitForm}>SUBMIT</button>
      </div>
      {/* <div>
            <button onClick={cross}>Cancel</button>
            <button onClick={confirm}>Confirm</button>
        </div> */}
    </div>
  );
}
