import React from "react";
import css from "./TributorCM.module.css";
import Listanimation from "../../assets/animation_list.gif";
import P2 from "../../assets/product 22.png";
import Popup from 'reactjs-popup';
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

const TributorCM = () => {
  return (
    <div className={css.container} id="tributorCM">
      <div className={css.heading}>
        <span className={css.cmh1}>Tributor for Media</span>

        <span className={css.cmh2}>
          Simplify content management with tributor, with analytics and content 
          rights at your fingertips!
        </span>
      </div>
      <div className={css.content}>
        <div className={css.right}>
          <img className={css.p1} src={P2} alt="" />
        </div>
        <div className={css.left}>

          <div className={css.leftnewcm}>
          <div className={css.listleft}>
            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>DCP Encoding</li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>DCP Tracking</li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>DCP Key Management </li>
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>Digital Agreements (Legal)</li>{" "}
            </div>
          </div>
          <div className={css.listright}>
            <div className={css.lone}> 
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>Daily Box Data</li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>DCRs,WCRs,TCR</li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>Analytics</li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>Payment Gateway</li>{" "}
            </div>

           

          </div>

          </div>



          {/* put */}
              {/* here */}
              <div className={css.prenew}>
              <Popup style={{backgroundColor:"blue"}} trigger=
				{<button className={css.prebook}> Register </button>}
				modal nested>
				{
					close => (
						<div className={css.modal}>
							<ContactForm/>
							<div>
								{/* <button onClick=
									{() => close()}>
					 x
								</button> */}
							</div>

						</div>
					)
				}
			</Popup>
 </div>
           {/* here */}

        </div>


      </div>
      <div className={css.sections}>
        <div className={css.sectionbox1}>
          <div className={css.d1}>
            <span className={css.cmediaheading}>DCP Services</span>
            <span className={css.cmediadescription13}>
              Avail a comprehensive DCP (Digital Cinema Package) tracking,
              encoding and key management system, allowing you to easily manage
              your movie's digital assets across different distribution
              channels.. 
            </span>
          </div>
        </div>

        <div className={css.sectionbox2}>
          <div className={css.d2}>
            <span className={css.cmediaheading24}>Analytics</span>
            <span className={css.cmediadescription24}>
              Get detailed insights into your movie's performance with our
              analytics feature. Track box office revenues, social media
              engagement, audience demographics, and more in real-time to make
              informed decisions! 
            </span>
          </div>
        </div>

        <div className={css.sectionbox3}>
          <div className={css.d3}>
            <span className={css.cmediaheading}>Agreement management</span>
            <span className={css.cmediadescription13}>
              Keep track of all your agreements in one place with our user
              dashboard. Easily view, sign, and manage agreements with
              distributors, theatres, and other partners. 
            </span>
          </div>
        </div>

        <div className={css.sectionbox4}>
          <div className={css.d4}>
            <span className={css.cmediaheading24}>Payment gateway</span>
            <span className={css.cmediadescription24}>
              {" "}
              Simplify the payment process with our integrated payment gateway.
              Receive revenue splits from theatres and other distribution
              partners directly to your bank account on a weekly basis. 
            </span>
          </div>
        </div>

        <div className={css.sectionbox7}>
          <span className={css.sb7c}>
            Contact us to learn more about our pricing details for the product
          </span>
          <Link to ="/contact">  <button onClick={() => window.scrollTo(0, 0)} className={css.cbt}>Contact us</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default TributorCM;
