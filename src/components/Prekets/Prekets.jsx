import React from "react";
import css from "./Prekets.module.css";
import Listanimation from "../../assets/animation_list.gif";
import P3 from "../../assets/product 33.png";

const Prekets = () => {
  return (
    <div className={css.container} >
      <div className={css.prhead}>
        <span className={css.prhead}>Prekets.com</span>
      </div>

      <div className={css.prdesc}>
        <span >
          Streamline your movie ticketing process with prekets, at the lowest
          price out on market!
        </span>
      </div>

      <div className={css.prcont}>
        <span className={css.prcont}>
          Our ticketing system, Prekets, offers affordable access to the best
          movie experiences. With our low-cost tickets, you can enjoy your
          favourite movies without breaking the bank. Plus, our platform is easy
          to use, ensuring a hassle-free ticket buying process. Get ready to sit
          back, relax, and enjoy the show!
        </span>
      </div>

      <div className={css.pthree}>
        {/* <div className={css.rowandcolumn}>
          <img className={css.listanimation} src={Listanimation} alt="" />
          <span style={{ color: "#B3B3B3" }}>
            Guaranteed Mininum Convenience
          </span>
        </div> */}
        <button className={css.dwbt}></button>
      </div>

      <div className={css.p3}>
        <img className={css.p3} src={P3} alt="" />
      </div>
    </div>
  );
};

export default Prekets;
