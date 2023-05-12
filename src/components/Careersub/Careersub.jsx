import React from 'react'
import css from "./Careersub.module.css"
const Careersub = () => {
  return (
    <div className={css.container}>

        <div className={css.csub1}>

            <div className={css.csub1left}>
                <span style={{fontSize:"22px"}}>Senior UI UX designer</span> <br />
                <span style={{color:"grey",textAlign:"left",fontSize:"14px"}}>Posted 11 hours ago</span>  <br />
                <button className={css.btfulltime}>Full time</button>
            </div>



            <div className={css.csub1right}> <button className={css.applybtn}>Apply now</button></div>

        </div>






        <div className={css.csub2}>
             <span  style={{fontSize:"22px",textAlign:"left",marginLeft:"1.6rem"}}>Qualifications</span>
            
            <ul style={{textAlign:"left", textDecoration:"dotted"}}>
            <li>bachelors(preferred)</li>
            <li>ncjsdbcjs</li>
            <li>jabcjk</li>
            <li>jasbjb</li>
           </ul>

         
          
           
           <br /> <br />

           <span style={{fontSize:"22px",textAlign:"left",marginLeft:"1.6rem"}}>Job description</span> <br />
           <span style={{textAlign:"left",marginLeft:"1.3rem"}}>We are looking for a UI/UX Designer to turn our solutions into easy-to-use applications for our clients.
            UI/UX Designer responsibilities include gathering user requirements, designing graphic elements and building 
            navigation components. To be successful in this role, you should have experience with design software and 
            wireframe tools. If you also have a portfolio of professional design projects that includes work with web/mobile 
            applications, we’d like you to apply.</span>   <br /> <br />

            <span style={{fontSize:"22px",textAlign:"left",marginLeft:"1.6rem"}}>Responsibilities</span>
            <ul style={{textAlign:"left", textDecoration:"dotted"}}>
                <li>nmbm</li>
                <li>qqqqqqqqqqqqqqq</li>
                <li>dddddddddddddddddddd</li>
                <li>sssssssssssssssss</li>
                <li>qqqqqqqqqqqqqq</li>
                <li>cccccccccccccccccccccccccccccccccccc</li>
                <li>cccccccccccccccccccccccc</li>
            </ul>
            <button className={css.applybtn}>Apply now</button>


        </div>



        <div className={css.csub3}>
            <h3>Fill out the form below and we'll get back to you soon as possible</h3>

  <form className={css.form} action="">

    <div className={css.formtop}> 

        <div className={css.formleft}>
        <input type="text"  placeholder='First Name' required="true"/>
        <input type="text"  placeholder='Mail'/>
        <input type="text"  placeholder='Current Location'/>  
        </div>


        <div className={css.formright}>
        <input type="text"  placeholder='Last Name'/>
        <input type="text"  placeholder='Phone number'/>
        <input type="text"  placeholder='Current CTC'/>
        </div>
        
         </div>

         <div className={css.formbottom}>
         <input type="text"  placeholder='What inspired you to apply for this job and why do you think you would be a good fit for our company? *'/>
         </div>

         <div className={css.belowbottom}>  
         <div className={css.uploadbox}>  
         <label class="custom-file-upload">  Upload Resume/Cv  
       <input type="file"  className={css.inputupload}/>
           </label> <br />
            <label htmlFor="">Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 10MB.v</label>     
         </div>
      



            <button className={css.submitbutton}> submit</button> 
         </div>

    


  </form>



        </div>


      
    </div>
  )
}

export default Careersub
