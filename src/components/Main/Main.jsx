import React from 'react'
import css from "./Main.module.css"
import Arrow from  "../../assets/Icon & Logo/arrowwhite.png"
import Prd1 from  "../../assets/Product image 1.png"
import Prd2 from  "../../assets/Product image 2.png"
import Prd3 from  "../../assets/Product image 3.png"

const Main = () => {
  return (
    <div className={css.container}>

      <div className={css.top}>   


        <div className={css.first}> <span>Powering The Digital Revolution</span></div>
        <div className={css.second}> <b>"Invicious"</b></div>
        <div className={css.third}>Invicious is committed to creating innovative solutions that redefine the digital landscape. <br />
Want to learn more about our innovative products?</div>
<div className={css.fourth}> 
<button className={css.button}>Click here</button>
</div>
<div className={css.fifth}>
  <span>Scroll</span>
  <img style={{fill:"white", height:"20px",width:"20px",color:"white"}} src={Arrow} alt="" />

</div>
 
    </div>

    <div className={css.middle}>
      <h1>Poster coming soon....</h1>
    </div>

    <div className="bottom">
      <div className={css.bh}>
        <span>Products</span>
        <span>Tributor by Invicious</span>
      </div>

      <div className={css.prdt1}>
          <div className={css.prdt1left}>
            <div className={css.leftsub}>
            <span> <span style={{fontSize:"40px",color:"gray"}}>1.</span> Tributor for Exhibitors</span>
          <span className={css.elevate1}>Elevate your movie screening with our platform,having full control of
             your exhibition process! </span>
            </div>
            <div className={css.rightsub}> 
             <button className={css.prebook}>Prebook</button>
             <button className={css.viewd}>View Details</button>
            </div>
          
          </div>
          <div className={css.prdt1right}>
             <img style={{height:"427px",width:"636px"}} src={Prd1} alt="" />

          </div>
          </div>

      <div className={css.prdt2}></div>


      <div className={css.prdt2}>
          <div className={css.prdt1left}>
            <div className={css.leftsub}>
            <span> <span style={{fontSize:"40px", color:"grey"}}>2.</span> Tributor for Content Management</span>
          <span className={css.elevate2}>Simplify content management with tributor, with analytics and content rights at your fingertips!</span>
            </div>
            <div className={css.rightsub}> 
             <button className={css.prebook}>Prebook</button>
             <button className={css.viewd}>View Details</button>
            </div>
          
          </div>
          <div className={css.prdt1right}>
             <img style={{height:"427px",width:"636px"}} src={Prd2} alt="" />

          </div>
          </div>


      <div className={css.prdt1}>
          <div className={css.prdt1left}>
            <div className={css.leftsub}>
            <span> <span style={{fontSize:"40px", color:"grey"}}>3.</span> Prekets.com</span>
          <span className={css.elevate3}>Streamline your movie ticketing process with prekets, at the lowest price out on market!</span>
            </div>
            <div className={css.rightsub}> 
             <button className={css.prebook}>Prebook</button>
             <button className={css.viewd}>View Details</button>
            </div>
          
          </div>
          <div className={css.prdt1right}>
             <img style={{height:"327px",width:"536px"}} src={Prd3} alt="" />

          </div>
          </div>



    </div>
      
    </div>
  )
}

export default Main



