import React from "react";
import { Link as LinkRoll } from "react-scroll";
import css from "./About.module.css";
import Arrow from "../../assets/Icon & Logo/arrowwhite.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={css.container}>
      <div className={css.aboutmainone}>
        <div className={css.first}>
          {" "}
          <span>Discover everything you need to <br /> know about our company</span>
        </div>
        {/* <div className={css.second}>"Invicious"</div> */}
        <div className={css.third}>
          Our vision and mission to the amazing team behind our success. Get to
          know our work culture, values, and what drives us to innovate and
          create. Let's dive in!
        </div>
        <div className={css.scroll}>
          <span>Scroll</span>
          <LinkRoll spy={true} smooth={true} to="aboutmaintwoid">  <img
            style={{
              fill: "white",
              height: "20px",
              width: "20px",
              color: "white",
            }}
            src={Arrow}
            alt=""
          /></LinkRoll>  
       
        </div>
      </div>

      <div className={css.aboutmaintwo} id="aboutmaintwoid" > 
        <div className={css.a1} >
          <div className={css.sameline} >
            <div className={css.linediv}></div> 
            <h2 className={css.abouth}> About us </h2>
            <div className={css.linediv}></div>
          </div>

          <span className={css.aboutd}>
            Invicious is a Tech start up committed to building a better future
            for all through innovation and digital empowerment. We create tools
            that help individuals and organisations thrive in a rapidly evolving
            digital landscape. 
          </span>
        </div>

        <div className={css.a1}>
          <div className={css.sameline}>
            <div className={css.linediv}></div>
            <h2 className={css.abouth}> Our Vision </h2>
            <div className={css.linediv}></div>
          </div>

          <span className={css.aboutd}>
            We aim to create a more equitable and inclusive digital world where
            the benefits of technology are maximised across various sectors. We
            believe that by leveraging this power, we can build more resilient,
            sustainable and innovative user-centric solutions. Whether through
            our software products, services or platforms, we help people achieve
            their full potential in the digital age. 
          </span>
        </div>

        <div className={css.a1}>
          <div className={css.sameline}>
            <div className={css.linediv}></div>
            <h2 className={css.abouth}> Our mission </h2>
            <div className={css.linediv}></div>
          </div>

          <span className={css.aboutd}>
            Invicious is committed to building a platform that automates
            post-production processes in the film industry. Our mission is to
            empower content owners and distributors to streamline their workflow
            and deliver high-quality content. Our platform offers collaboration
            and analytics tools that enable seamless workflow, without
            compromising on quality or efficiency.  
          </span>
        </div>
      </div>

     <div className={css.aboutmainthree}  id="some"  >
        <h2>"Driven by innovation and collaboration"</h2>
        <h3>Meet the invicious team</h3>
        <div className={css.boxmain}>
          <div className={css.bmleft}>
            <h1 className={css.teamname}>Barathi M S</h1>
            <h3 className={css.teamposition}>Co-founder & CEO</h3>
            <span className={css.teamdescription}>
              With a diverse set of skills that spans across the entire spectrum
              of software development, and a wealth of experience, Barathi works
              meticulously to drive Invicious forward in the fast-paced world of
              technology.
            </span>
          </div>
          <div className={css.bmright}>
            <h1 className={css.teamname}>Sinchana L</h1>
            <h3 className={css.teamposition}>Co-founder & CFO</h3>
            <span className={css.teamdescription}>
              With an eye for detail and a focus, Sinchana ensures that the
              company operates smoothly and efficiently. Her various skill sets
              in finance and administration enable her to manage the financial
              aspects of the business, ensuring the growth of Invicious
            </span>
          </div>
        </div>
        <br />

        <div className={css.boxsub}>
          <div className={css.subparts}>
            <h2 className={css.teamname}>Nivetha S</h2>
            <h3 className={css.teamposition}>UI/UX Designer</h3>
            <span className={css.derole}>
              Nivetha is responsible for creating intuitive and engaging user
              interfaces. With a keen eye for detail and passion for design, and
              her expertise, she helps Invicious create user friendly products.
            </span>
          </div>
          <div className={css.subparts}>
            <h2 className={css.teamname}>Anamika G</h2>
            <h3 className={css.teamposition}>Back End Developer</h3>
            <span className={css.derole}>
              As a backend developer at Invicious, Anamika comes with a strong
              background in computer science and software engineering. Her
              technical expertise ensures that our products are robust, reliable
              and scalable.
            </span>
          </div>
          <div className={css.subparts}>
            <h2 className={css.teamname}>Alhad T M</h2>
            <h3 className={css.teamposition}>Front End Developer</h3>
            <span className={css.derole}>
              Alhad brings a strong sense of design and functionality to every
              project, with a passion for creating interactive and engaging user
              interfaces. His expertise in the field ensures the high-quality
              and responsiveness of our products.
            </span>
          </div>
          <div className={css.subparts}>
            <h2 className={css.teamname}>Karthikeyan</h2>
            <h3 className={css.teamposition}>UI/UX Designer</h3>
            <span className={css.derole}>
            As a UI/UX Designer at invicious, Karthikeyan has a strong sense of product research and 
            development of a responsible product based on high-fidelity prototypes, Integrating user-centered 
            designs and technologies.
            </span>
          </div>
          {/* <div className={css.subparts}>
            <h1>?</h1>
                <h3>job role</h3>
                <span>description</span>
            </div> */}
        </div>
      </div>

      <div className={css.workculture}>
      <div className={css.sameline}>
            <div className={css.linediv}></div>
            <h2 className={css.abouth}> Work culture</h2>
            <div className={css.linediv}></div>
          </div>

        <span className={css.workculspan}>
          At Invicious, we foster a dynamic and <span style={{color:"#999999"}}>agile work culture </span>  that promotes
          collaboration, creativity and innovation. We believe that our success
          is built on the <span style={{color:"#999999"}}>strength of our workforce </span> . We strive to create an
          environment where everyone can <span style={{color:"#999999"}}>athrive and grow. </span>  We 
          <span style={{color:"#999999"}}> encourage our teammates </span>  to share their insights and perspectives freely, and promote
          a work <span style={{color:"#999999"}}> environment that best suits their preferences. </span>  We prioritise
          personal and professional growth and development, providing
          opportunities to take ownership of their career paths and to  
          <span style={{color:"#999999"}}>pursue their passions within our organisation. </span>
        </span>
      </div>

      <div className={css.openings}>
        <span className={css.colours}>
          <b>Let's Create the best journey with us</b> 
        </span>
        <Link to="/career">
          <button onClick={() => window.scrollTo(0, 0)} className={css.openingsbutton}>View openings</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default About;