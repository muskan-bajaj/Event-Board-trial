import React,{useContext} from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from "../Context/Context";

export default function Navbar() {
  const authContextValue=useContext(AuthContext);
  const redirect=useNavigate();

  const handleLogin=async()=>{
    authContextValue.setOnLogin(true);
  }

  const handleHome=async()=>{
    authContextValue.setOnLogin(false);
  }

  const handleLogout=async()=>{
    authContextValue.setLoggedIn(false);
    authContextValue.setOnLogin(false);
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    redirect('/')
    // console.log("vinit chutiya")
  }

  return (
    <div className='navbar'>
        <div className='image'>
            <img className='navLogo' alt='' src='https://staging.noticebard.com/wp-content/uploads/2022/08/Kiit-logo-696x340-300x147-1.jpg'></img>
        </div>
        <div className='search'>
            <input type='search' className='searchInput' placeholder='Type to search here!'/>
        </div>
        <div className='login'>
          {!authContextValue.loggedIn
            ? 
            <>
              {!authContextValue.onLogin
                ?
                <Link to='/login' style={{textDecoration:'none'}}>
                  <button className='loginB' onClick={handleLogin}>Login</button>
                </Link>
                :
                <Link to='/' style={{textDecoration:'none'}}>
                  <button className='loginB' onClick={handleHome}>Home</button>
                </Link>
              }
            </>
            : 
            <button className='loginB' onClick={handleLogout}>Logout</button>
          }







          {/* {!authContextValue.loggedIn ? (
            <Link to='/login' style={{textDecoration:'none'}} onClick={handleLogin}>
              <button className='loginB'>Login</button>
            </Link>
          ) : (
              <button className='loginB' onClick={handleLogout}>Logout</button>
          )} */}
        </div>
    </div>
  )
}
