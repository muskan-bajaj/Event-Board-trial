import React,{useState,useMemo} from "react";

export const AuthContext=React.createContext({
    token:"",
    isLoggedIn:"",
    email:"",
    userID:""
});

export const AuthContextProvider=(props)=>{
    // const [token,setToken]=useState(null);
    // const [email,setEmail]=useState(null);
    const [loggedIn, setLoggedIn]=useState(false);
    const [userID, setUserID]=useState("");

    const login=(email,token,userID)=>{
        localStorage.setItem("token",token);
        localStorage.setItem("email",email);
        localStorage.setItem("id",userID);
    }    

    const contextValue = useMemo(
        () => ({
        //   token: token,
        //   setToken:setToken,
          loggedIn: loggedIn,
          setLoggedIn:setLoggedIn,
        //   email:email,
        //   setEmail:setEmail,
          login:login,
          userID:userID,
          setUserID:setUserID
        }),
        [loggedIn,setLoggedIn,userID]
      );    

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}