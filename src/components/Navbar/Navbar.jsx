import React, { useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubDropdown = () => {
    setIsSubOpen(!isSubOpen);
  };

  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li className={`dropdown ${isSubOpen ? 'open' : ''}`} onClick={toggleSubDropdown}>
          <span>Services</span>
          <ul className="dropdown-menu">  
            <li>
              <a href="/">Service 1</a>
            </li>
            <li>
              <a href="/">Service 2</a>
            </li>
            <li className="sub-dropdown" onClick={(e) => e.stopPropagation()}>
              <span>Sub-Services</span>
              <ul className="sub-dropdown-menu">
                <li>
                  <a href="/">Sub-Service 1</a>
                </li>
                <li>
                  <a href="/">Sub-Service 2</a>
                </li>
                <li>
                  <a href="/">Sub-Service 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Service 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <button className="hamburger" onClick={toggleDropdown}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar