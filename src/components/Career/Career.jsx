import React from 'react'
import css from "./Career.module.css"
import Arrow from  "../../assets/Icon & Logo/arrowwhite.png"
import Location from "../../assets/Icon & Logo/Frame-2.svg"
import { Link } from 'react-router-dom'

const Career = () => {
  return (
    <div className={css.top}>
       <div className={css.top}>   


<div className={css.first}> <span>Powering The Digital Revolution</span></div>
<div className={css.second}> <b>"Invicious"</b></div>
<div className={css.third}>
Join our team of innovators and change-makers! Check out our current job openings and <br /> 
start your journey towards a rewarding career with us.
</div>
<div className={css.fourth}> 
<button className={css.button}>Click here</button>
</div>
<div className={css.fifth}>
<span style={{color:"#fff"}}>Scroll</span>
<img style={{fill:"white", height:"20px",width:"20px",color:"white"}} src={Arrow} alt="" />

</div>

</div>

{/* middle div (current openings) */}
   
   <div className={css.middle}> 

     <div className={css.m1}>
        <span style={{fontSize:"23px"}}>Current Openings</span>
     </div>

     <div className={css.m2}>

        <div className={css.jobboxes}>
       
       <div className={css.jsec1}>
        <div><button className={css.btfulltime}>Full time</button></div>
        <div> <span>11 hours ago</span></div>
       
      
       </div>

       <div className={css.jsec2}>
        <span style={{fontSize:"20px",textAlign:"left"}}>Senior UI/UX Designer</span> <br /> <br />
        <span style={{fontSize:"13px" , color: "#808080"}}>Some versions of Microsoft Word also generate the text using the lorem function. 
            Just type it in your Word</span> <br /> <br />
            <hr />
       </div>

       <div className={css.jsec3}>
               <div className={css.jsub1}>
                     <img src={Location} alt="" />
                     <span>Coimbatore</span> 
              </div>

              <div className={css.jsub2}>
             <Link to="/jobroles" ><button  className={css.applynow}>Apply now</button></Link>   
              </div>
       </div>


        </div>
        <div className={css.jobboxes}>
       
       <div className={css.jsec1}>
        <div><button className={css.btfulltime}>Full time</button></div>
        <div> <span>11 hours ago</span></div>
       
      
       </div>

       <div className={css.jsec2}>
        <span style={{fontSize:"20px",textAlign:"left"}}>Senior UI/UX Designer</span> <br /> <br />
        <span style={{fontSize:"13px" , color: "#808080"}}>Some versions of Microsoft Word also generate the text using the lorem function. 
            Just type it in your Word</span> <br /> <br />
            <hr />
       </div>

       <div className={css.jsec3}>
               <div className={css.jsub1}>
                     <img src={Location} alt="" />
                     <span>Coimbatore</span> 
              </div>

              <div className={css.jsub2}>
                <button className={css.applynow}>Apply now</button>
              </div>
       </div>


        </div>
        <div className={css.jobboxes}>
       
       <div className={css.jsec1}>
        <div><button className={css.btfulltime}>Full time</button></div>
        <div> <span>11 hours ago</span></div>
       
      
       </div>

       <div className={css.jsec2}>
        <span style={{fontSize:"20px",textAlign:"left"}}>Senior UI/UX Designer</span> <br /> <br />
        <span style={{fontSize:"13px" , color: "#808080"}}>Some versions of Microsoft Word also generate the text using the lorem function. 
            Just type it in your Word</span> <br /> <br />
            <hr />
       </div>

       <div className={css.jsec3}>
               <div className={css.jsub1}>
                     <img src={Location} alt="" />
                     <span>Coimbatore</span> 
              </div>

              <div className={css.jsub2}>
                <button className={css.applynow}>Apply now</button>
              </div>
       </div>


        </div>







        
     </div>

     <div className={css.m3}>
        <span>No suitable job opening found? Don't worry! We're always looking for passionate and talented individuals to join our team. Send us your resume and tell us why you'd be a great fit.
             Let's build a better future together!</span>
        <button className={css.mailbutton}>career@invicious.in</button>
     </div>




   </div>






    </div>
  )
}

export default Career
