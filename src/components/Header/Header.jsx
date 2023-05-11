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
       <Link to="/"><li className={css.none}  onClick={()=>setOpened(false)}>Home</li></Link> 
       <Link><li className={css.none}  onClick={()=>setOpened((prev)=>!prev)}>Product</li></Link>
        { opened &&   <div onClick={()=>setOpened(false)} className={css.dropcontainer}> 
        {/* here */}
     
     <ul className={css.dropdownlist}>
       <Link to="/tributorE"> <li className={css.none}  >Tributor E</li></Link>
       <Link to="/tributorCM"> <li className={css.none} >Tributor CM</li></Link>
       <Link to="/prekets"><li className={css.none} >Prekets</li></Link>
      </ul> 
   </div>} 
         <Link to="/about"><li className={css.none}  onClick={()=>setOpened(false)}>About</li></Link>
         <Link to="/contact"><li className={css.none}  onClick={()=>setOpened(false)}>Contact</li></Link>
       
      </ul> 
      </div>
      
     
   
     
    </div>
    
  )
}

export default Header
