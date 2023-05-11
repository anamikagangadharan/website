import React from 'react'
import css from "./TributorE.module.css"
import Listanimation from "../../assets/animation_list.gif"
import P1 from "../../assets/Product image 1.png"


const TributorE = () => {
  return (
    <div className={css.container}>
        <div className={css.heading}>
        <span style={{fontSize:"36px"}}>Tributor for Exhibitor</span>
      <br /> <br /> <br />
      <span style={{fontSize:"20px"}}>Elevate your movie screening experience with our platform, having full control of your exhibition process!</span>
        </div>
        <div className={css.content}>
            <div className={css.left}>
                <div className={css.listleft}>
                  
                <div className={css.lone}> 
                    <img className={css.listanimation} src={Listanimation} alt="" />
                    <li className={css.none}>DCP Tracking</li> </div>

                    <div className={css.lone}> 
                    <img className={css.listanimation} src={Listanimation} alt="" />
                    <li className={css.none}>DCP Key Management</li> </div>

                    <div className={css.lone}> 
                    <img className={css.listanimation} src={Listanimation} alt="" />
                    <li className={css.none}>Digital Agreements (Legal)</li></div>

                    <div className={css.lone}> 
                    <img className={css.listanimation} src={Listanimation} alt="" />
                    <li className={css.none}>Analytics & Performances</li> </div>
                </div>
                <div className={css.listright}>
                    <div className={css.lone}> 
                    <img className={css.listanimation} src={Listanimation} alt="" />
                    <li className={css.none}>Screen Ads Aggregator</li> </div>
                   
                    <div className={css.lone}> 
                    <img className={css.listanimation} src={Listanimation} alt="" />
                    <li className={css.none}>Screen + Snow Configurator</li> </div>

                    <div className={css.lone}> 
                    <img className={css.listanimation} src={Listanimation} alt="" />
                    <li className={css.none}>Integrated Workflow with Distributors</li> </div>

                    <div className={css.lone}> 
                    <img className={css.listanimation} src={Listanimation} alt="" />
                    <li className={css.none}>Payment Gateway</li> </div>

                    <button className={css.prebook}>Prebook</button>



                   
                  
                  
                </div>
            </div>
            <div className={css.right}>
                <img className={css.p1} src={P1} alt="" />
            </div>
        </div>


        <div className={css.sections}>
            <div className={css.sectionbox1}>
            <div className={css.d1}>
                <span style={{color:"#FF5656", fontSize:"30px"}}>DCP Services</span>
                <span>Easily manage all your digital cinema packages (DCPs) from a single dashboard. Managing your keys is now easier than ever. </span>
            </div>
            </div>

            <div className={css.sectionbox2}>
            <div className={css.d2}>
                <span style={{color:"#FF5656", fontSize:"30px"}}>Analytics</span>
                <span>Get real-time insights into your box office performance, including ticket sales, and screen performance. Use this information to make data-driven decisions and optimize your marketing strategies. </span>
            </div>
            </div>

            <div className={css.sectionbox3}>
            <div className={css.d3}>
                <span style={{color:"#FF5656", fontSize:"30px"}}>Agreement management</span>
                <span>Keep track of all your agreements and contracts with stakeholders in one place. Get alerts when agreements are about to expire and automate the renewal process. </span>
            </div>
            </div>

        
            <div className={css.sectionbox4}>
            <div className={css.d4}>
                <span style={{color:"#FF5656", fontSize:"30px"}}>Screen Ads aggregator</span>
                <span>Choose which ads to display on which screens and schedule them in advance. Make sure your advertisers reach their target audience and maximize your ad revenue. </span>
            </div>
            </div>

            <div className={css.sectionbox5}>
            <div className={css.d5}>
                <span style={{color:"#FF5656", fontSize:"30px"}}>Screen and show configuration</span>
                <span>Configure your theatre screens and shows in a user-friendly interface. Manage show times, ticket prices, seating arrangements, and more. </span>
            </div>
            </div>

            
            <div className={css.sectionbox6}>
            <div className={css.d6}>
                <span style={{color:"#FF5656", fontSize:"30px"}}>Payment gateway</span>
                <span>Streamline your payment process and get paid faster with our secure and easy-to-use payment gateway. Settle all payments on a weekly basis and automatically split movie revenue with other stakeholders. </span>
            </div>
            </div>

            <div className={css.sectionbox7}>
                <span style={{fontSize:"20px"}}>Contact us to learn more about our pricing details for the product</span>
                <button className={css.cbt}>Contact us</button>
            </div>
            
        </div>   
      
    </div>
  )
}

export default TributorE
 