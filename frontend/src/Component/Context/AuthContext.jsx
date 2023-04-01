import { createContext,useReducer } from 'react'

export const NoticeContext=createContext();
export const AuthContext=createContext();

export const authReducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {user:action.payload}
        case 'LOGOUT':
            return {user:null}
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

export const AuthContextProvider=({childern})=>{
    const[stateA,dispatchA]=useReducer(authReducer,{
        user:null
    })
    const [state,dispatch]=useReducer(noticeReducer,{
        notices:null
    }) 

    return(
        <AuthContext.Provider value={{...stateA,dispatchA}}>
            <NoticeContext.Provider value={{...state,dispatch}}>
                {childern}
            </NoticeContext.Provider>
        </AuthContext.Provider>
    )
}