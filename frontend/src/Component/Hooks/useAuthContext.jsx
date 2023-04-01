// import { AuthContext ,  NoticeContext } from "../Context/AuthContext";
import { AuthContext } from "../Context/NoticeContext";
import { useContext } from "react";

export const useAuthContext=()=>{
    const authContextValue=useContext(AuthContext);

    if(!authContextValue){
        throw Error('useContext should be used inside contextProvider')
    }

    return authContextValue
}

// export const useNoticeContext=()=>{
//     const noticeContextValue=useContext(NoticeContext);

//     if(!noticeContextValue){
//         throw Error('useContext should be used inside contextProvider')
//     }

//     return noticeContextValue
// }