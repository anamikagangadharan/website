import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "./Contact.module.css";
import Location from "../../assets/Icon & Logo/Frame-2.svg";
import Phone from "../../assets/Icon & Logo/Frame-1.svg";
import Mail from "../../assets/Icon & Logo/Frame.svg";
import Lk from "../../assets/Icon & Logo/linkedin2.svg";
import Insta from "../../assets/Icon & Logo/instagram logo.svg";
import Twitter from "../../assets/Icon & Logo/Twitter.svg";

const Contact = () => {
  const notify = () => toast.success("Sent Successfully");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uwefeop", 
        "template_9a4zv6d",
        form.current,
        "0ShbDNI1kk0Ln2HDZ"
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
          <h1>
            From Concept to Reality <br />
            “Let’s make it happen”{" "}
          </h1>
          <h4>
            Contact us any time for consulting solutions for your products.{" "}
          </h4>
        </div>
  <div className={css.c123common}>  
        <div className={css.cone}>
          <img src={Location} alt="" />
          <span style={{ marginTop: "17px", textAlign: "left" }}>
            124-H, 3rd Floor, Thendral Complex, DB Road, RS Puram, Coimbatore -
            641002
          </span>
        </div>
        <div className={css.ctwo}>
          <img src={Phone} alt="" />
          <span>+91 7550315660</span>
        </div>
        <div className={css.cthree}>
          <img src={Mail} alt="" />
          <span>contact@invicious.in</span>
        </div>   
        </div>
        <div className={css.socialicons}>
        <a href="https://twitter.com/Invicious_in?s=08">  <img src={Twitter} alt="" />    </a>   
           <a href="https://www.linkedin.com/company/invicious">  <img src={Lk} alt="" /> </a>  
            <a href="https://instagram.com/invicious.in?igshid=MzRlODBiNWFlZA==">  <img src={Insta} alt="" /></a> 
        </div>  
      </div>

      {/* Right Section */}

      <div className={css.right}>
        <h2 style={{ textAlign: "center" }}>Sent us a message</h2>

        <form
          className={css.contactdetails}
          action=""
          ref={form}
          onSubmit={sendEmail}
        >
          <label htmlFor="">Name</label>
          <input
            className={css.inputcontact}
            type="text"
            name="to_name"
            required="true"
          />

          <label htmlFor="">Mail</label>
          <input
            className={css.inputcontact}
            type="text"
            name="user_email"
            required="true"
          />

          <label htmlFor="">Subject</label>
          <input className={css.inputcontact} type="text" name="subject" />

          <label htmlFor="">Message(optional)</label>
          <input className={css.inputcontact} type="text" name="message" />

          <button onClick={notify} className={css.sendbutton}>
            Send
          </button>
          <ToastContainer autoClose={600} position={"bottom-right"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
