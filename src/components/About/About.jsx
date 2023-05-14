import React from "react";
import css from "./About.module.css";
import Arrow from "../../assets/Icon & Logo/arrowwhite.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={css.container}>
      <div className={css.aboutmainone}>
        <div className={css.first}>
          {" "}
          <span>Discover everything you need to know about our company</span>
        </div>
        <div className={css.second}>"Invicious"</div>
        <div className={css.third}>
          Our vision and mission to the amazing team behind our success. Get to
          know our work culture, values, and what drives us to innovate and
          create. Let's dive in!
        </div>
        <div className={css.scroll}>
          <span>Scroll</span>
          <img
            style={{
              fill: "white",
              height: "20px",
              width: "20px",
              color: "white",
            }}
            src={Arrow}
            alt=""
          />
        </div>
      </div>

      <div className={css.aboutmaintwo}>
        <div>
          <div className={css.sameline}>
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

        <div>
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

        <div>
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

      <div className={css.aboutmainthree}>
        <h2>"Driven by innovation and collaboration"</h2>
        <h3>Meet the invicious team</h3>
        <div className={css.boxmain}>
          <div className={css.bmleft}>
            <h1>Barathi M S</h1>
            <h3>Co-founder & CEO</h3>
            <span>
              With a diverse set of skills that spans across the entire spectrum
              of software development, and a wealth of experience, Barathi works
              meticulously to drive Invicious forward in the fast-paced world of
              technology.
            </span>
          </div>
          <div className={css.bmright}>
            <h1>Sinchana L</h1>
            <h3>Co-founder & CFO</h3>
            <span>
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
            <h1>Nivetha S</h1>
            <h3>UI/UX Designer</h3>
            <span>
              Nivetha is responsible for creating intuitive and engaging user
              interfaces. With a keen eye for detail and passion for design, and
              her expertise, she helps Invicious create user friendly products.
            </span>
          </div>
          <div className={css.subparts}>
            <h1>Anamika Devi G</h1>
            <h3>Back End Developer</h3>
            <span>
              As a backend developer at Invicious, Anamika comes with a strong
              background in computer science and software engineering. Her
              technical expertise ensures that our products are robust, reliable
              and scalable.
            </span>
          </div>
          <div className={css.subparts}>
            <h1>Alhad T M</h1>
            <h3>Front End Developer</h3>
            <span>
              Alhad brings a strong sense of design and functionality to every
              project, with a passion for creating interactive and engaging user
              interfaces. His expertise in the field ensures the high-quality
              and responsiveness of our products.
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
        <h2>Work culture</h2>

        <span>
          At Invicious, we foster a dynamic and agile work culture that promotes
          collaboration, creativity and innovation. We believe that our success
          is built on the strength of our workforce. We strive to create an
          environment where everyone can thrive and grow.  We encourage our
          teammates to share their insights and perspectives freely, and promote
          a work environment that best suits their preferences. We prioritise
          personal and professional growth and development, providing
          opportunities to take ownership of their career paths and to pursue
          their passions within our organisation.
        </span>
      </div>

      <div className={css.openings}>
        <span className={css.colours}>
          Lets Create the best journey with us
        </span>
        <Link to="/career">
          <button className={css.openingsbutton}>View openings</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default About;
