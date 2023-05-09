import React from 'react'
import css from "./TributorCM.module.css"
import Listanimation from "../../assets/animation_list.gif"
import P2 from "../../assets/Product image 2.png"

const TributorCM = () => {
  return (
     <div className={css.container}>
    <div className={css.heading}>
    <span>Tributor for Exhibitor</span>
  <br />
  <span>Elevate your movie screening experience with our platform, having full control of your exhibition process!</span>
    </div>
    <div className={css.content}>
    <div className={css.right}>
            <img className={css.p1} src={P2} alt="" />
        </div>
        <div className={css.left}>
            <div className={css.listleft}>
              
            <div className={css.lone}> 
                <img className={css.listanimation} src={Listanimation} alt="" />
                <li>DCP Tracking</li> </div>

                <div className={css.lone}> 
                <img className={css.listanimation} src={Listanimation} alt="" />
                <li>DCP Key Management</li> </div>

                <div className={css.lone}> 
                <img className={css.listanimation} src={Listanimation} alt="" />
                <li>Digital Agreements (Legal)</li></div>

                <div className={css.lone}> 
                <img className={css.listanimation} src={Listanimation} alt="" />
                <li>Analytics & Performances</li> </div>
            </div>
            <div className={css.listright}>
                <div className={css.lone}> 
                <img className={css.listanimation} src={Listanimation} alt="" />
                <li>Screen Ads Aggregator</li> </div>
               
                <div className={css.lone}> 
                <img className={css.listanimation} src={Listanimation} alt="" />
                <li>Screen + Snow Configurator</li> </div>

                <div className={css.lone}> 
                <img className={css.listanimation} src={Listanimation} alt="" />
                <li>Integrated Workflow with Distributors</li> </div>

                <div className={css.lone}> 
                <img className={css.listanimation} src={Listanimation} alt="" />
                <li>Payment Gateway</li> </div>

                <button className={css.prebook}>Prebook</button>   
              
            </div>
        </div>
        
    </div>
    <div className={css.sections}>
        <div className={css.sectionbox1}>
        <div className={css.d1}>
            <span style={{color:"#FF5656", fontSize:"30px"}}>DCP Services</span>
            <span>Avail a comprehensive DCP (Digital Cinema Package) tracking, encoding and key management system, allowing you to easily manage your movie's digital assets across different distribution channels.. </span>
        </div>
        </div>

        <div className={css.sectionbox2}>
        <div className={css.d2}>
            <span style={{color:"#FF5656", fontSize:"30px"}}>Analytics</span>
            <span>Get detailed insights into your movie's performance with our analytics feature. Track box office revenues, social media engagement, audience demographics, and more in real-time to make informed decisions! </span>
        </div>
        </div>

        <div className={css.sectionbox3}>
        <div className={css.d3}>
            <span style={{color:"#FF5656", fontSize:"30px"}}>Agreement management</span>
            <span>Keep track of all your agreements in one place with our user dashboard. Easily view, sign, and manage agreements with distributors, theatres, and other partners. </span>
        </div>
        </div>

    
        <div className={css.sectionbox4}>
        <div className={css.d4}>
            <span style={{color:"#FF5656", fontSize:"30px"}}>Payment gateway</span>
            <span> Simplify the payment process with our integrated payment gateway. Receive revenue splits from theatres and other distribution partners directly to your bank account on a weekly basis. </span>
        </div>
        </div>

        {/* <div className={css.sectionbox5}>
        <div className={css.d5}>
            <span style={{color:"#FF5656", fontSize:"30px"}}>Screen and show configuration</span>
            <span>Easily manage all your digital cinema packages (DCPs) from a single dashboard. Managing your keys is now easier than ever. </span>
        </div>
        </div>

        
        <div className={css.sectionbox6}>
        <div className={css.d6}>
            <span style={{color:"#FF5656", fontSize:"30px"}}>Payment gateway</span>
            <span>Easily manage all your digital cinema packages (DCPs) from a single dashboard. Managing your keys is now easier than ever. </span>
        </div>
        </div> */}

        <div className={css.sectionbox7}>
            <span>Contact us to learn more about our pricing details for the product</span>
            <button className='bt'>Contact us</button> 
        </div>
        
    </div>   
  
</div>
  )
}

export default TributorCM
