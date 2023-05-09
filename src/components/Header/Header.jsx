import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/Icon & Logo/Logo.svg"
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

const Header = () => {
  const [opened,setOpened]= useState(false)
  return (
    <div className={css.container}> 
       
        <div className={css.logo}>
            <img src={Logo} alt="" />
        </div>

        <div className='headdiv'>
      <ul className={css.heading}>
       <Link to="/"><li>Home</li></Link> 
       <Link to="/product"><li onClick={()=>setOpened((prev)=>!prev)}>Product</li></Link> 
        { opened &&   <Dropdown/>} 
         <Link to="/about"><li>About</li></Link>
         <Link to="/contact"><li>Contact</li></Link>
       
      </ul>
      </div>
      
     
   
     
    </div>
    
  )
}

export default Header
