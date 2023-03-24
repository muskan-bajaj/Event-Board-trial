import {useState} from 'react'
import {useAuthContext} from './useAuthContext'


export function useLogin() {
    const [error,setError]=useState(null)
    const [loading, setLoading]=useState(null)

    const {dispatch}=useAuthContext

    const login=async(email,password)=>{
        setLoading(true)
        setError(null)

        const response=await fetch('/api/user/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        const json=await response.json()

        if(!response.ok){
            setError(json.error)
            setLoading(false)
        }
        if(response.ok){
            //creating cookie (local storage to keep the user logged in untill session is valid)
            // localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN',payload:json})
            setLoading(false)
        }
    }

  return {login,loading,error}
}
