import React,{ useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../Context/Context";

import './LoginPage.css'

export default function LoginPage() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [error,setError]=useState(null);

  const authContextValue=useContext(AuthContext);

  const fetchFunction = async () => {
    const response=await fetch('/api/user/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({email,password})
    });
    const json=await response.json();

    if(!response.ok){
      authContextValue.email=email;
      setError(json.error);
      // console.log(json);
      if(!json.error){
        authContextValue.loggedIn=true;
      }
      authContextValue.login(json.email,json.jwtToken);
    }

    if(response.ok){
      setError(error);
    }
  };

  // if(authContextValue.loggedIn){
  // }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    fetchFunction();
  }

  return (
    <div className='bkgrd'>
      <div className="kiitLogo">
        <img className='kLogo' src="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/63f294d8f9b3c8677b30ad6d_kiitlogo.png" alt=''/>
      </div>
      <form className="login">
        <div className='black'>
          <div className="loginForm">
            <div className='loginHeading'>
              Login
            </div>
            <div className="emailInput">
              <label for="email">
                <span className='span'>Email</span>
                <input type="email" id='email' placeholder='username@gmail.com' onChange={(e)=>setEmail(e.target.value)} value={email}/>
              </label>
            </div>
            <div className="passwordInput">
              <label for="password">
                <span className='span'>Password</span>
                <input type="password" id='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
              </label>
            </div>
            <div className="forgetPassword">
              <Link to="/forgetPassword" style={{textDecoration:'none'}}>
                <span className='span2'>Forgot Password?</span>
              </Link>
            </div>
            <div className="signIn">
              ({authContextValue.loggedIn})
                ?
                <Link to='/dashboard'>
                  {error && <div className="loginError">{error}</div>}
                  <button className='signInButton' onClick={handleSubmit}>Log In</button>
                </Link>
                :
                  {error && <div className="loginError">{error}</div>}
                  <button className='signInButton' onClick={handleSubmit}>Log In</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}