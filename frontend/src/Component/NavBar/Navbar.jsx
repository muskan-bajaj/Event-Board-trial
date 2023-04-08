import React,{useContext} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
import { AuthContext } from "../Context/Context";

export default function Navbar() {
  const authContextValue=useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className='image'>
            <img className='navLogo' alt='' src='https://staging.noticebard.com/wp-content/uploads/2022/08/Kiit-logo-696x340-300x147-1.jpg'></img>
        </div>
        <div className='search'>
            <input type='search' className='searchInput' placeholder='Type to search here!'/>
        </div>
        <div className='login'>
            {/* <Link to='/login' style={{textDecoration:'none'}}>
              <button className='loginB'>Login</button>
            </Link> */}

            {!authContextValue.loggedIn ? (
            <Link to='/login' style={{textDecoration:'none'}}>
              <button className='loginB'>Login</button>
            </Link>
          ) : (
              <button className='loginB' onClick={console.log("qwer56789op;lojhgfdxzxcfhjkl;'")}>Logout</button>
          )}
        </div>
    </div>
  )
}
