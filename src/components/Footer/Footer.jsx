import React from "react";
import Logo from "../../assets/Icon & Logo/Logo.svg";
import css from "./Footer.module.css";
// import Arrow from "../../assets/Icon & Logo/Arrow.svg"
import Location from "../../assets/Icon & Logo/Frame-2.svg";
import Phone from "../../assets/Icon & Logo/Frame-1.svg";
import Mail from "../../assets/Icon & Logo/Frame.svg";
import Twitter from "../../assets/Icon & Logo/Twitter.svg";
import Fb from "../../assets/Icon & Logo/Facebook logo.svg";
import Insta from "../../assets/Icon & Logo/instagram logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={css.maincontainer}>
      <div className={css.container}>
        <div className={css.footerlogo}>
          <img src={Logo} alt="" />
        </div>

        <div className={css.fdetails}>
          <div className={css.fdone}>
            <div className={css.fdonedescr}>
              {" "}
              Invicious is committed to creating innovative solutions that
              redefine the digital landscape.Join us on our mission to make a
              positive impact and build a brighter tomorrow.
            </div>
            <div className={css.footericons}>
              <img src={Twitter} alt="" />
              <img src={Fb} alt="" />
              <img src={Insta} alt="" />
            </div>
          </div>
          <div className={css.fproimp}>
            <div className={css.fdtwo}>
              <h3 style={{ color: "white" }}>Products</h3>
              <div className={css.fdspan}>
                <Link to="/tributorE">
                  {" "}
                  <span className={css.tc} onClick={() => window.scrollTo(0, 0)}>Tributor Cinema</span>
                </Link>
                <Link to="/tributorCM">
                  {" "}
                  <span onClick={() => window.scrollTo(0, 0)}>Tributor Media</span>
                </Link>
                <Link to="/prekets">
                  {" "}
                  <span onClick={() => window.scrollTo(0, 0)}>Prekets.com</span>
                </Link> 
              </div>
            </div>

            <div className={css.fdthree}>
              <h3 style={{ color: "white" }}>Important Links</h3>
              <div className={css.fdspan}>
                <span>Organisation team</span>
                <span>Our partners</span>
                <span>Cookies Policy</span>
                <Link to="/career">
                  {" "}
                  <span onClick={() => window.scrollTo(0, 0)}>Career</span>{" "}
                </Link>{" "}
              </div>
            </div>
          </div>

          <div className={css.fdfour}>
            <h3 style={{ color: "white", textAlign: "left" }}>Contac info</h3>
            <div className={css.foot}>
              {" "}
              <img src={Location} alt="" />
              <span style={{ marginLeft: "-10px" }}>
                124-H, 3rd Floor, Thendral Complex,DB Road, RS Puram, Coimbatore
                - 641002
              </span>
            </div>{" "}
            <br />
            <div className={css.foot}>
              <img src={Phone} alt="" />
              <span>+91 7550315660</span>
            </div>{" "}
            <br />
            <div className={css.foot}>
              <img src={Mail} alt="" />
              <span style={{ marginLeft: "5px" }}>contact@inivicious.in</span>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className={css.footerlist}>
        <div className={css.flistleft}>
          <Link to="/">
            {" "}
            <li onClick={() => window.scrollTo(0, 0)}>Home</li>
          </Link>

          <Link to="/about">
            {" "}
            <li onClick={() => window.scrollTo(0, 0)}>About</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li onClick={() => window.scrollTo(0, 0)}>Contact</li>
          </Link>
          <li>Privacy policy</li>
          <li>Terms and Conditions</li>
        </div>

        <div className={css.flistright}>
          <span>Copyright © 2023 Invicious</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
