import React from 'react'
import css from "./Prekets.module.css"
import Listanimation from "../../assets/animation_list.gif"
import P3 from "../../assets/Product image 3.png"

const Prekets = () => {
  return (
    <div className={css.container}>
      <div>
        <span style={{fontSize:"35px"}} >Prekets.com</span>
      </div>


      <div>
        <span style={{fontSize:"23px"}}>Streamline your movie ticketing process with prekets, at the lowest price out on market!</span>
      </div>


      <div>
        <span style={{fontSize:"18px", color:"#999999"}}>Our ticketing system, Prekets, offers affordable access to the best movie experiences. With our low-cost tickets, you can enjoy your favourite movies without breaking the bank. Plus, our platform is easy to use, ensuring a hassle-free ticket buying process. Get ready to sit back, relax, and enjoy the show!</span>
      </div>


      <div className={css.pthree}>
        <img className={css.listanimation} src={Listanimation} alt="" />
        <span style={{color:"#B3B3B3"}}>Guaranteed Mininum Convenience</span>
        <button className={css.dwbt}>Download app</button>  
      </div>

     <div>
     <img src={P3} alt="" />
     </div>

    </div>
  )
}

export default Prekets
