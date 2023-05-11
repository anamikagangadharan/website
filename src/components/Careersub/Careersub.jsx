import React from 'react'
import css from "./Careersub.module.css"
const Careersub = () => {
  return (
    <div className={css.container}>

        <div className={css.csub1}>

            <div className={css.csub1left}>
                <span>Senior UI UX designer</span> <br />
                <span>Posted 11 hours ago</span> 
                <button className={css.btfulltime}>Full time</button>
            </div>



            <div className={css.csub1right}> <button>Apply now</button></div>

        </div>






        <div className={css.csub2}>
           <span>Qualifications</span>
           <ul>
            <li>bachelors(preferred)</li>
            <li>ncjsdbcjs</li>
            <li>jabcjk</li>
            <li>jasbjb</li>
           </ul>
           <br /> <br />

           <span style={{marginLeft:"-622px"}}>Job description</span> <br />
           <span>We are looking for a UI/UX Designer to turn our solutions into easy-to-use applications for our clients.
            UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building 
            navigation components. To be successful in this role, you should have experience with design software and 
            wireframe tools. If you also have a portfolio of professional design projects that includes work with web/mobile 
            applications, we’d like you to apply.</span>   <br /> <br />

            <span style={{textAlign:"left",display:"flex"}}>Responsibilities</span>
            <ul style={{textAlign:"left", textDecoration:"dotted"}}>
                <li>nmbm</li>
                <li>qqqqqqqqqqqqqqq</li>
                <li>dddddddddddddddddddd</li>
                <li>sssssssssssssssss</li>
                <li>qqqqqqqqqqqqqq</li>
                <li>cccccccccccccccccccccccccccccccccccc</li>
                <li>cccccccccccccccccccccccc</li>
            </ul>
            <button>Apply now</button>


        </div>



        <div className={css.csub3}>
            <h3>Fill out the form below and we'll get back to you soon as possible</h3>

  <form className={css.form} action="">

    <div className={css.formtop}> 

        <div className={css.formleft}>
        <input type="text"  placeholder='First Name'/>
        <input type="text"  placeholder='First Name'/>
        <input type="text"  placeholder='First Name'/>  
        </div>


        <div className={css.formright}>
        <input type="text"  placeholder='First Name'/>
        <input type="text"  placeholder='First Name'/>
        <input type="text"  placeholder='First Name'/>
        </div>
        
         </div>

         <div className={css.formbottom}>
         <input type="text"  placeholder='First Name'/>
         </div>

         <div className={css.belowbottom}>
            <h1>upload resume</h1> <br />
            <button> submit</button>
         </div>

    


  </form>



        </div>


      
    </div>
  )
}

export default Careersub
