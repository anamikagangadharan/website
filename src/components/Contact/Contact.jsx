import React from 'react'
import css from "./Contact.module.css"
import Location from "../../assets/Icon & Logo/Location.svg"
import Phone from "../../assets/Icon & Logo/Phone.svg"
import Mail from "../../assets/Icon & Logo/Mail.svg"
import Facebook from "../../assets/Icon & Logo/Facebook logo.svg"
import Instagram from "../../assets/Icon & Logo/instagram logo.svg"
import Twitter from "../../assets/Icon & Logo/Twitter.svg"

const Contact = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <h1>From Concept to Reality
         “Let’s make it happen” </h1>
         <h5>Contact us any time for consulting solutions for your products. </h5>
         <div className={css.cone}>
            <img src={Location } alt="" />
            <span>124-H, 3rd Floor, Thendral Complex,
              DB Road, RS Puram, Coimbatore - 641002</span>
         </div>
         <div className={css.ctwo}>
            <img src={Phone} alt="" />
            <span>+91 7550315660</span>
         </div>
         <div className={css.cthree}>
            <img src={Mail} alt="" />
            <span>contact@inivicious.in</span>
         </div>
         <div className={css.socialicons}>
           <img src={Facebook} alt="" />
           <img src={Instagram} alt="" />
           <img src={Twitter} alt="" />
         </div>
      </div>
      <div className={css.right}>
         <h1>Sent us a message</h1>
         <div className={css.contactdetails}>
         <span>Name</span>
         <hr />
         <span>Mail</span>
         <hr />
         <span>Subject</span>
         <hr /> 
         <span>Message(optional)</span>
         <hr />
         </div>
         <button className={css.sendbutton}>Send</button>
        
      </div>
    </div>
  )
}

export default Contact
