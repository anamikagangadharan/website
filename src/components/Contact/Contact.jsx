import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "./Contact.module.css"
import Location from "../../assets/Icon & Logo/Frame-2.svg"
import Phone from "../../assets/Icon & Logo/Frame-1.svg"
import Mail from "../../assets/Icon & Logo/Frame.svg"
import Facebook from "../../assets/Icon & Logo/Facebook logo.svg"
import Instagram from "../../assets/Icon & Logo/instagram logo.svg"
import Twitter from "../../assets/Icon & Logo/Twitter.svg"

const Contact = () => {
  const notify = () => toast.success("Sent Successfully");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ysdycza",
        "template_u4hg08m",
        form.current,
        "Elb9zYrtnD8tivc90"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={css.container}>

      {/* Left section */}
      <div className={css.left}>
        <div className={css.leftabout1}>
              <h1>From Concept to Reality <br />
              “Let’s make it happen” </h1>
           <span >Contact us any time for consulting solutions for your  products. </span>
         </div>

         <div className={css.cone}>
            <img src={Location } alt="" />
            <span style={{marginTop:"17px",textAlign:"left"}}>124-H, 3rd Floor, Thendral Complex,
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
         <img src={Twitter} alt="" />
           <img src={Facebook} alt="" />
           <img src={Instagram} alt="" />   
         </div>
      </div>

      {/* Right Section */}

      <div className={css.right}>
         {/* <h1>Sent us a message</h1>
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
         <button className={css.sendbutton}>Send</button> */}
         <h2 style={{textAlign:"center"}}>Sent us a message</h2>


         <form className={css.contactdetails}  action="" ref={form} onSubmit={sendEmail} > 
          <label htmlFor="">Name</label>
          <input type="text" name="to_name" required="true"  />

          <label htmlFor="">Mail</label>
          <input  type="text" name="user_email" required="true" />

          <label htmlFor="">Subject</label>
          <input   type="text" name="subject"/>

          <label htmlFor="">Message(optional)</label>
          <input type="text"  name="subject"/>
          <button onClick={notify} style={{alignItems:"center",marginLeft:"6.2rem"}} className={css.sendbutton}>Send</button>
          <ToastContainer autoClose={600} position={"bottom-right"} />
         </form>
        
        
      </div>
    </div>
  )
}

export default Contact
