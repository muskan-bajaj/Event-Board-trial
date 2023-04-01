import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const handleSubmit=async (e)=>{
    e.preventDefault();
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
              <Link to='/dashboard'>
                <button className='signInButton' onClick={handleSubmit}>Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}