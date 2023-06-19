import React from "react";
import { Link  as Linkscroll} from "react-scroll";
import { Link} from "react-router-dom";
import css from "./Main.module.css";
import Arrow from "../../assets/Icon & Logo/arrowwhite.png";
import Prd1 from "../../assets/product 11.png";
import Prd2 from "../../assets/product 22.png";
import Prd3 from "../../assets/product 33.png";
import Poster from "../../assets/Posternew.png";
import MobPoster from "../../assets/mobposter.png";
import Popup from 'reactjs-popup';
import ContactForm from "../ContactForm/ContactForm";
import Log from "../../assets/mainlogo1.svg";

const Main = () => {
  const mobile=window.innerWidth<=768
  return (
  //   <Router>
  // <Route exact path="/" component={Main} />
    <div className={css.container}>
      <div className={css.top}>
        <div className={css.first}>
         
          <span className={css.firsts}>Powering The Digital Revolution</span>
        </div>
        {/* <div className={css.second}>
          {" "}
          <b>"Invicious"</b>
          <img className={css.log} src={Log} alt="" />
        </div>  */}
        <div className={css.third}>
          Invicious is committed to creating innovative solutions that redefine
          the digital landscape.Want to learn more about our innovative products?
        </div>
        {/* <div className={css.fourth}>
          <button className={css.buttonhome}>Click here</button>
        </div> */}
        <div className={css.fifth}>
          <span>Scroll</span>
       <Linkscroll to="middleposter"  spy={true} smooth={true}>     <img
            style={{
              fill: "white",
              height: "20px",
              width: "20px",
              color: "white",
            }}
            src={Arrow}
            alt=""
          />   </Linkscroll>
        </div>
      </div> 

      <div className={css.middle} id="middleposter"> 
     {mobile?   <img className={css.poster} src={MobPoster} alt="" /> : <img className={css.poster} src={Poster} alt="" />}
      </div>

      <div className="bottom">
        <div className={css.bh}>
          <span>Products</span>
          <span>Tributor by Invicious</span>
        </div>

        <div className={css.prdt1}>
                <div className={css.prdt1left}>
                    <div className={css.leftsub}>
              <div className={css.mh1}>
              <span>
                {" "}
                 1. Tributor for Cinemas
              </span>
                </div> 
                
             <div className={css.elevate1}> 
             <span >
                Elevate your movie screening with our platform,having full
                control of your exhibition process!{" "}
              </span></div> 
              
             
            </div>
            <div className={css.rightsub}>
{/* here */}
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

{/* here */}
<Link to="/tributorE">
          <button onClick={() => window.scrollTo(0, 0)} className={css.viewd}>View Details</button>{" "}
        </Link>
            </div>
          </div>
          <div className={css.prdt1right}>
            <img className={css.hproduct1} src={Prd1} alt="" />
          </div>
        </div>

        <div className={css.prdt2}></div>

        <div className={css.prdt2}>
          <div className={css.prdt1left}>
            <div className={css.leftsub}>

            <div className={css.mh1}>
              <span>
                {" "}
                 2. Tributor for Media
              </span>
                </div> 
                
             <div className={css.elevate1}> 
             <span >
                Simplify content management with tributor, with analytics and content rights at your
                fingertips!{" "}
              </span></div> 


            </div>
            <div className={css.rightsub}>

              {/* here */}
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

              {/* here */}
              <Link to="/tributorCM">
          <button onClick={() => window.scrollTo(0, 0)} className={css.viewd}>View Details</button>{" "}
        </Link>
            </div>
          </div>
          <div className={css.prdt1right}>
            <img className={css.hproduct2} src={Prd2} alt="" />
          </div>
        </div>

        <div className={css.prdt1}>
          <div className={css.prdt1left}>
            <div className={css.leftsub}>
            <div className={css.mh1}>
              <span>
                {" "}
                 3. Prekets.com
              </span>
                </div> 
                
             <div className={css.elevate1}> 
             <span >
                Streamline your movie ticketing process with prekets, at the lowest price out on market!{" "}
              </span></div> 
            </div>
            <div className={css.rightsub}>
              <button className={css.downloadbutton}></button>
              {/* <div className={css.hide}>will launch soon</div> */}
              <Link to="/prekets">
          <button onClick={() => window.scrollTo(0, 0)} className={css.viewd}>View Details</button>{" "}
        </Link>
            </div>
          </div>
          <div className={css.prdt1right}>
            <img className={css.hproduct3} src={Prd3} alt="" />
          </div>
        </div>
      </div>
    </div>
// </Router>

  );
};

export default Main;