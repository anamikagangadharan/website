import React from 'react'
import Logo from "../../assets/Icon & Logo/Logo.svg"
import css from "./Footer.module.css"
// import Arrow from "../../assets/Icon & Logo/Arrow.svg"
import Location from "../../assets/Icon & Logo/Location.svg"
import Phone from "../../assets/Icon & Logo/Phone.svg"
import Mail from "../../assets/Icon & Logo/Mail.svg"

const Footer = () => {
  return (
    <div className={css.maincontainer}>
    <div className={css.container}>
        <div className={css.footerlogo}>
            <img src={Logo} alt="" />
        </div>

        <div className={css.fdetails}>
            <div className={css.fdone}>Invicious is committed to creating innovative solutions that redefine the digital landscape. 
Join us on our mission to make a positive impact and build a brighter tomorrow.</div>

            <div className={css.fdtwo}> 
            <h3>Products</h3>
            <span>Tributor E</span>
            <span>Tributor CM</span>
            <span>Prekets.com</span>
            </div>

            <div className={css.fdthree}>
            <h3>important Links</h3>
            <span>Organisation team</span>
            <span>Our partners</span>
            <span>Cookies Policy</span>
            <span>Careers</span>
            </div>


            <div className={css.fdfour}>
                <h3>Contac info</h3>
                <div>         <img src={Location} alt="" />
                <span>124-H, 3rd Floor, Thendral Complex,
DB Road, RS Puram, Coimbatore - 641002</span>  </div>
         
                <div>
                <img src={Phone} alt="" />
                <span>+91 7550315660</span>
                </div>

                <div>
                    <img src={Mail} alt="" />
                    <span>contact@inivicious.in</span>
                </div>  

            </div>

        </div>
      
    </div>
 <hr />
 
    <div className={css.footerlist}>
        <div className={css.flistleft}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy policy</li>
            <li>Terms and Conditions</li>
        </div>



        <div className={css.flisright}>
            <span>Copyright © 2023 Invicious</span>
        </div>

    </div> 
    

    </div>

   
  
  )
}

export default Footer
