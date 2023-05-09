import React from 'react'
import css from "./Dropdown.module.css"
import { Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <div className={css.container}>
      <ul className={css.dropdownlist}>
        <Link to="/tributorE"> <li>Tributor E</li></Link>
        <Link to="/tributorCM"> <li>Tributor CM</li></Link>
        <Link to="/prekets"><li>Prekets</li></Link>
       
       
        
      </ul>
    </div>
  )
}

export default Dropdown
