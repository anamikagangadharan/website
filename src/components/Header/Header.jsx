import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/Icon & Logo/Logo.svg"
import { Link } from 'react-router-dom'
// import Dropdown from '../Dropdown/Dropdown'

const Header = () => {
  const [opened,setOpened]= useState(false)
  return (
    <div className={css.container}> 
       
        <div className={css.logo}>
            <img src={Logo} alt="" />
        </div>

        <div className='headdiv'>

  
     


      <ul className={css.heading}>
       <Link to="/"><li onClick={()=>setOpened(false)}>Home</li></Link> 
       <Link><li onClick={()=>setOpened((prev)=>!prev)}>Product</li></Link>
        { opened &&   <div onClick={()=>setOpened(false)} className={css.dropcontainer}> 
        {/* here */}
     
     <ul className={css.dropdownlist}>
       <Link to="/tributorE"> <li >Tributor E</li></Link>
       <Link to="/tributorCM"> <li>Tributor CM</li></Link>
       <Link to="/prekets"><li>Prekets</li></Link>
      </ul> 
   </div>} 
         <Link to="/about"><li onClick={()=>setOpened(false)}>About</li></Link>
         <Link to="/contact"><li onClick={()=>setOpened(false)}>Contact</li></Link>
       
      </ul> 
      </div>
      
     
   
     
    </div>
    
  )
}

export default Header
