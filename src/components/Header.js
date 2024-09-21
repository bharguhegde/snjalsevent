import React from 'react'

function Header() {
  return (
    <div className='header-container'>
        <div className='logo-wrapper'>
            <img className='logo' src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/59251a91801773.5e3b087d12d10.jpg'/>
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