import React from 'react'
import { LOGO_URL } from '../utils/constants'
function Header() {
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
            </ul>
        </div>

    </div>
  )
}

export default Header