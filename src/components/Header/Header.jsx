import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/Icon & Logo/Logo.svg";
import Bars from "../../assets/Icon & Logo/menu.png";
import { Link } from "react-router-dom";


const Header = () => {
  
  const mobile = window.innerWidth <= 768 ? true : false;
  const [opened, setOpened] = useState(false);

  const [drop, setDrop] = useState(false);
  
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img className={css.logohead} src={Logo} alt="" />
      </div>

      <div className="headdiv">
        {opened === false && mobile === true ? (
          <div onClick={() => setOpened(true)}>
            <img onClick={()=>setDrop(false)} className={css.bars} src={Bars} alt="" />
          </div>
        ) : (
          <ul className={css.heading}>
            <Link to="/">
              <li className={css.none} onClick={() => setOpened(false)}>
                Home 
              </li>
            </Link>
            <Link>
              <li  
                className={css.nonep}
                onClick={() => setOpened((prev)=>!prev)} >
                Product &nbsp; ⤋
                 <ul
                onClick={() =>setOpened(false)}
                className={css.dropcontainer}
              >
                <ul  className={css.dropdownlist} >
                  <Link to="/tributorE">
                    {" "}
                    <li className={css.none}>Tributor for Cinemas</li>
                  </Link>
                  <Link to="/tributorCM">
                    {" "}
                    <li className={css.none}>Tributor for Media</li>
                  </Link>
                  <Link to="/prekets">
                    <li className={css.none}>Prekets</li>
                  </Link>
                </ul>
              </ul>
              </li>
            </Link>
            
        
             
          

            <Link to="/about">
              <li className={css.none} onClick={() => setOpened(false)}>
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className={css.none} onClick={() => setOpened(false)}>
                Contact 
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header; 