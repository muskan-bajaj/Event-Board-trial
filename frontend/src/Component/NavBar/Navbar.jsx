import React,{useContext} from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from "../Context/Context";
// import RegistrationForm from '../Form/RegistrationForm/RegistrationForm';
// import Form from '../../Page/Form';

export default function Navbar() {
  const authContextValue=useContext(AuthContext);
  const redirect=useNavigate();

  const handleLogin=async()=>{
    // authContextValue.setOnLogin(true);
    // console.log(authContextValue.onLogin)
    localStorage.setItem('onLogin',true)
  }

  const handleHome=async()=>{
    // authContextValue.setOnLogin(false);
    localStorage.removeItem('onLogin')
  }

  const handleLogout=async()=>{
    authContextValue.setLoggedIn(false);
    localStorage.removeItem('onLogin')
    // authContextValue.setOnLogin(false);
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    authContextValue.setFields([])
    redirect('/')
  }

  // const handleForm=async()=>{
  //   return(
  //     <RegistrationForm/>
  //   )
  // }

  return (
    <div className='navbar'>
        <div className='image'>
            <img className='navLogo' alt='' src='https://staging.noticebard.com/wp-content/uploads/2022/08/Kiit-logo-696x340-300x147-1.jpg'></img>
        </div>
        <div className='search'>
            <input type='search' className='searchInput' placeholder='Type to search here!'/>
        </div>
        <div className='login'>
          {localStorage.getItem('id')
            ? 
            <>
              <Link to='/dashboard/form' style={{textDecoration:'none'}}>
                  <button className='loginB'>Forms</button>
              </Link>
              <button className='loginB' onClick={handleLogout}>Logout</button>
            </>
            :
            <>
              {localStorage.getItem('onLogin')
                ?
                <Link to='/' style={{textDecoration:'none'}}>
                  <button className='loginB' onClick={handleHome}>Home</button>
                </Link>
                :
                <Link to='/login' style={{textDecoration:'none'}}>
                  <button className='loginB' onClick={handleLogin}>Login</button>
                </Link>
              }
            </>
          }
        </div>
    </div>
  )
}
