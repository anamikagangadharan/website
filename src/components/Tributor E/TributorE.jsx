import React from "react";
import css from "./TributorE.module.css";
import Listanimation from "../../assets/animation_list.gif";
import P1 from "../../assets/product 11.png";
import Popup from 'reactjs-popup';
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

// import 'reactjs-popup/dist/index.css';

const TributorE = () => {
  return (
    <div className={css.container} id="tributorE">
      <div className={css.heading}>
        <span className={css.te}>Tributor for Cinemas</span>

        <span className={css.elev}>
          Elevate your movie screening experience with our platform, having full
          control of your exhibition process!{" "}
        </span>
      </div>
      <div className={css.content} >
        <div className={css.left}>
          <div className={css.leftnew1}>

         
          <div className={css.listleft}>
            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>DCP Tracking</li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>DCP Key Management</li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>Digital Agreements (Legal)</li>
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>Analytics & Performances</li>{" "}
            </div>
          </div>
          <div className={css.listright}>
            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>Screen Ads Aggregator</li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>Screen + Snow Configurator</li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>
                Integrated Workflow with Distributors
              </li>{" "}
            </div>

            <div className={css.lone}>
              <img className={css.listanimation} src={Listanimation} alt="" />
              <li className={css.none}>Payment Gateway</li>{" "}
            </div>


                     </div>
          </div>

  
                              {/* here */}
                              <div className={css.prebook1}>
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




        <div className={css.right}>
          <img className={css.p1} src={P1} alt="" />
        </div>
      </div>

      <div className={css.sections}>
        <div className={css.sectionbox1}>
          <div className={css.d1}>
            <span className={css.tmediaheadings}>DCP Services</span>
            <span className={css.tmediadescription}>
              Easily manage all your digital cinema packages (DCPs) from a
              single dashboard. Managing your keys is now easier than ever. 
            </span>
          </div>
        </div>

        <div className={css.sectionbox2}>
          <div className={css.d2}>
            <span className={css.tmediaheadingsr}>Analytics</span>
            <span className={css.tmediadescriptionr}>
              Get real-time insights into your box office performance, including
              ticket sales, and screen performance. Use this information to make
              data-driven decisions and optimize your marketing strategies. 
            </span>
          </div>
        </div>

        <div className={css.sectionbox3}>
          <div className={css.d3}>
            <span className={css.tmediaheadings}>Agreement management</span>
            <span className={css.tmediadescription}>
              Keep track of all your agreements and contracts with stakeholders
              in one place. Get alerts when agreements are about to expire and
              automate the renewal process. 
            </span>
          </div>
        </div>

        <div className={css.sectionbox4}>
          <div className={css.d4}>
            <span className={css.tmediaheadingsr}>Screen Ads aggregator</span>
            <span className={css.tmediadescriptionr}>
              Choose which ads to display on which screens and schedule them in
              advance. Make sure your advertisers reach their target audience
              and maximize your ad revenue. 
            </span>
          </div>
        </div>

        <div className={css.sectionbox5}>
          <div className={css.d5}>
            <span className={css.tmediaheadings}>
              Screen and show configuration
            </span>
            <span className={css.tmediadescription}>
              Configure your theatre screens and shows in a user-friendly
              interface. Manage show times, ticket prices, seating arrangements,
              and more. 
            </span>
          </div>
        </div>

        <div className={css.sectionbox6}>
          <div className={css.d6}>
            <span className={css.tmediaheadingsr}>Payment gateway</span>
            <span className={css.tmediadescriptionr}>
              Streamline your payment process and get paid faster with our
              secure and easy-to-use payment gateway. Settle all payments on a
              weekly basis and automatically split movie revenue with other
              stakeholders. 
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

export default TributorE;
