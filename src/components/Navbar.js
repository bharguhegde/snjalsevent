import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg'
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box,Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { BsCart2 } from "react-icons/bs";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


function Navbar() {
    const [openMenu,setopenMenu] = useState(false);
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Testimonial",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        }
    ]
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo}/>
        </div>
        <div className='navbar-links-container'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Testimonial</a>
        <a href=''>Contact</a>
        <a href=''>
            <BsCart2 className='navbar-cart-icon'/>
        </a>
        <button className='primary-button'>Book Now</button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={()=>setopenMenu(true)}/>
            <Drawer open={openMenu} onClose={()=>setopenMenu(false)} anchor='right'>
                <Box sx={{width:250}} role='presentation' onClick={()=>setopenMenu(false)} onkeyDown={()=>setopenMenu(false)}>
                    <CloseRoundedIcon onClick={()=>setopenMenu(false)} sx={{textAlign:'right',float:'right',fontSize:'2em'}}/>
                    <List>
                        {
                            menuOptions.map((item)=>(
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>

                            ))
                        }
                    </List>
                </Box>
            </Drawer>
        </div>

    </nav>
  )
}

export default Navbar