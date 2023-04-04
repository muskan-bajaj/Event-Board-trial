import React,{useState,useMemo} from "react";
// import bcrypt from "bcryptjs-react";

export const AuthContext=React.createContext({
    token:"",
    isLoggedIn:"",
    email:""
});

export const AuthContextProvider=(props)=>{
    const [token,setToken]=useState(null);
    const [email,setEmail]=useState(null);
    const [loggedIn, setLoggedIn]=useState(false);

    const login=(email,token)=>{
        localStorage.setItem("token",token);
        localStorage.setItem("email",email);
    }    

    const contextValue = useMemo(
        () => ({
          token: token,
          setToken:setToken,
          loggedIn: loggedIn,
          setLoggedIn:setLoggedIn,
          email:email,
          setEmail:setEmail,
          login:login
        }),
        [token, loggedIn,email]
      );    

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}