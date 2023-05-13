import React from 'react'
import css from "./Main.module.css"
import Arrow from  "../../assets/Icon & Logo/arrowwhite.png"
import Prd1 from  "../../assets/product 11.png"
import Prd2 from  "../../assets/product 22.png"
import Prd3 from  "../../assets/product 33.png"
import Poster from  "../../assets/Poster.png"

const Main = () => {
  return (
    <div className={css.container}>

      <div className={css.top}>   


        <div className={css.first}> <span>Powering The Digital Revolution</span></div>
        <div className={css.second}> <b>"Invicious"</b></div>
        <div className={css.third}>Invicious is committed to creating innovative solutions that redefine the digital landscape. <br />
Want to learn more about our innovative products?</div>
<div className={css.fourth}> 
<button className={css.buttonhome}>Click here</button>
</div>
<div className={css.fifth}>
  <span>Scroll</span>
  <img style={{fill:"white", height:"20px",width:"20px",color:"white"}} src={Arrow} alt="" />

</div>
 
    </div>

    <div className={css.middle}>
      <img className={css.poster} src={Poster} alt="" />
    </div>

    <div className="bottom">
      <div className={css.bh}>
        <span>Products</span>
        <span>Tributor by Invicious</span>
      </div>

      <div className={css.prdt1}>
          <div className={css.prdt1left}>
            <div className={css.leftsub}>
            <span className={css.mh1}> <span className={css.mh1s}>1.</span> Tributor for Cinemas</span>
          <span className={css.elevate1}>Elevate your movie screening with our platform,having full control of
             your exhibition process! </span>
            </div>
            <div className={css.rightsub}> 
             <button className={css.prebook}>Prebook</button>
             <button className={css.viewd}>View Details</button>
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
            <span className={css.mh2} > <span className={css.mh2s}>2.</span> Tributor for Media</span>
          <span className={css.elevate2}>Simplify content management with tributor, with analytics and content rights at your fingertips!</span>
            </div>
            <div className={css.rightsub}> 
             <button className={css.prebook}>Prebook</button>
             <button className={css.viewd}>View Details</button>
            </div>
          
          </div>
          <div className={css.prdt1right}>
             <img className={css.hproduct2}  src={Prd2} alt="" />

          </div>
          </div>


      <div className={css.prdt1}>
          <div className={css.prdt1left}>
            <div className={css.leftsub}>
            <span className={css.mh3}> <span className={css.mh3s}>3.</span> Prekets.com</span>
          <span className={css.elevate3}>Streamline your movie ticketing process with prekets, at the lowest price out on market!</span>
            </div>
            <div className={css.rightsub}> 
             <button className={css.prebook}>Prebook</button>
             <button className={css.viewd}>View Details</button>
            </div>
          
          </div>
          <div className={css.prdt1right}>
             <img className={css.hproduct3} src={Prd3} alt="" />

          </div>
          </div>



    </div>
      
    </div>
  )
}

export default Main



