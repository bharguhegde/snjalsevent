import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants'
function Header() {
  const[btnName,setbtnName] = useState('Login')
  
  return (
    <div className='header-container'>
        <div className='logo-wrapper'>
            <img className='logo' src={LOGO_URL}/>
        </div>
        <div className='nav-container'>
            <ul className='nav-item-wrapper'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
            <button onClick={()=>btnName==='Login'?setbtnName('Logout'):setbtnName('Login')} className='login-btn'>{btnName}</button>
            </ul>
        </div>

    </div>
  )
}

export default Header