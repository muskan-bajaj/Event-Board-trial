import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='image'>
            <img className='navLogo' alt='' src='https://staging.noticebard.com/wp-content/uploads/2022/08/Kiit-logo-696x340-300x147-1.jpg'></img>
        </div>
        <div className='search'>
            <input type='search' placeholder='Type to search here!'/>
        </div>
        <div className='login'>
            <Link to='/login' style={{textDecoration:'none'}}>
              <button>Login</button>
            </Link>
        </div>
    </div>
  )
}
