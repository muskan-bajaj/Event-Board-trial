import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const useAuthContext=()=>{
    const contextValue=useContext(AuthContext);

    if(!contextValue){
        throw Error('useContext should be used inside contextProvider')
    }

    return contextValue
}