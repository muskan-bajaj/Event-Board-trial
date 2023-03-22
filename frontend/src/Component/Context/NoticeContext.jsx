import { createContext, useReducer } from "react";

export const NoticeContext=createContext();

export const noticeReducer=(state,action)=>{
    switch (action.type){
        case 'SHOW_ALL_NOTICE':
            return{
                notice:action.payload
            }
        case 'FETCH_ALL_NOTICE':
            return{
                notice:[action.payload, ...state.notice]
            }
        default:
            return state
    }
}

//children property contains the tag or page that
//NoticeContextProvider wraps in index.js
//in this case it is App.jsx

//wrapping App with NoticeContext.Provider
export const NoticeContextProvider=({children})=>{

    //useReducer is similar to useState
    //dispatch function is used to change the state value
    const [state,dispatch]=useReducer(noticeReducer,{
        notices:null
    })

    //arguement inside dispatch func is called ACTION
    //dispatch({type:'SHOW_ALL_NOTICE',payload:[{},{}]})

    return(
        <NoticeContext.Provider value={{...state,dispatch}}>
            {children}
        </NoticeContext.Provider>
    )
}