import React,{useState,useMemo} from "react";

export const AuthContext=React.createContext({
    token:"",
    // isLoggedIn:"",
    email:"",
    userID:""
});

export const AuthContextProvider=(props)=>{
    const [loggedIn, setLoggedIn]=useState(false);
    const [onLogin, setOnLogin]=useState(false);
    const [userID, setUserID]=useState("");
    const [fields,setFields]=useState([{}])
    const [notices,setNotices]=useState([])

    var array=[]

    // const [userData,setUserData]=useState([{}])
    // const [userFieldValues,setUserFieldValues]=useState([])

    const login=(email,token,userID)=>{
        localStorage.setItem("token",token);
        localStorage.setItem("email",email);
        localStorage.setItem("id",userID);
    }    

    const contextValue = useMemo(
        () => ({
          login:login,
          loggedIn: loggedIn,
          setLoggedIn:setLoggedIn,
          userID:userID,
          setUserID:setUserID,
          onLogin:onLogin,
          setOnLogin:setOnLogin,
          fields:fields,
          setFields:setFields,
          notices:notices,
          setNotices:setNotices,
          array:array
        //   userData:userData,
        //   setUserData:setUserData,
        //   userFieldValues:userFieldValues,
        //   setUserFieldValues:setUserFieldValues
        //   fieldName:fieldName,
        //   setFieldName:setFieldName,
        //   fieldType:fieldType,
        //   setFieldType:setFieldType,
        //   mandate:mandate,
        //   setMandate:setMandate
        }),
        [loggedIn,setLoggedIn,userID,setUserID,onLogin,setOnLogin,fields,setFields,notices,setNotices,array]
      );    

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}