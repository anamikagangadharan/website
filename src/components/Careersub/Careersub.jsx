import React from "react";
import css from "./Careersub.module.css";
const Careersub = () => {
  return (
    <div className={css.container}>
      <div className={css.csub1}>
        <div className={css.csub1left}>
          <span>Senior UI UX designer</span> <br />
          <span style={{ color: "grey", textAlign: "left", fontSize: "14px" }}>
            Posted 11 hours ago
          </span>{" "}
          <br />
          <button className={css.btfulltime}>Full time</button>
        </div>

        <div className={css.csub1right}>
          {" "}
          <button className={css.applybtn}>Apply now</button>
        </div>
      </div>

      <div className={css.csub2}>
        <span className={css.quali}>Qualifications</span>
        <ul
          className={css.qualist}
          style={{ textAlign: "left", textDecoration: "dotted" }}
        >
          <li>bachelors(preferred)</li>
          <li>ncjsdbcjs</li>
          <li>jabcjk</li>
          <li>jasbjb</li>
        </ul>
        <br /> <br />
        <span className={css.jobhead}>Job description</span> <br />
        <span className={css.jobd}>
          We are looking for a UI/UX Designer to turn our solutions into
          easy-to-use applications for our clients. UI/UX Designer
          responsibilities include gathering user requirements, designing
          graphic elements and building navigation components. To be successful
          in this role, you should have experience with design software and
          wireframe tools. If you also have a portfolio of professional design
          projects that includes work with web/mobile applications, we’d like
          you to apply.
        </span>{" "}
        <br /> <br />
        <span className={css.respon}>Responsibilities</span>
        <ul
          className={css.resli}
          style={{ textAlign: "left", textDecoration: "dotted" }}
        >
          <li>nmbm</li>
          <li>qqqqqqqqqqqqqqq</li>
          <li>dddddddddddddddddddd</li>
          <li>sssssssssssssssss</li>
          <li>qqqqqqqqqqqqqq</li>
          <li>cccccccccccccccccccccccccccccccccccc</li>
          <li>cccccccccccccccccccccccc</li>
          <li>cccccccccccccccccccccccc</li>
          <li>cccccccccccccccccccccccc</li>
          <li>cccccccccccccccccccccccc</li>
          <li>cccccccccccccccccccccccc</li>
          <li>cccccccccccccccccccccccc</li>
          <li>cccccccccccccccccccccccc</li>
        </ul>
      </div>
      <button
        style={{
          width: "80px",
          margin: "auto",
          borderRadius: "41px",
          backgroundColor: "black",
          color: "white",
          border: "1px solid white",
          padding: "8px 2px",
          height: "40px",
        }}
        className={css.applybtn2}
      >
        Apply now
      </button>

      <div className={css.csub3}>
        <h3>
          Fill out the form below and we'll get back to you soon as possible
        </h3>

        <form className={css.form} action="">
          <div className={css.formtop}>
            <div className={css.formleft}>
              <input
                className={css.careerinput}
                type="text"
                placeholder="First Name"
                required="true"
              />
              <input
                className={css.careerinput}
                type="text"
                placeholder="Mail"
                required="true"
              />
              <input
                className={css.careerinput}
                type="text"
                placeholder="Current Location"
                required="true"
              />
            </div>

            <div className={css.formright}>
              <input
                className={css.careerinput}
                type="text"
                placeholder="Last Name"
                required="true"
              />
              <input
                className={css.careerinput}
                type="text"
                placeholder="Phone number"
                required="true"
              />
              <input
                className={css.careerinput}
                type="text"
                placeholder="Current CTC"
                required="true"
              />
            </div>
          </div>

          <textarea
            className={css.careerinput2}
            placeholder="What inspired you to apply for this job and why do you think you would be a good fit for our company "
          ></textarea>

          <div className={css.belowbottom}>
            <div className={css.uploadbox}>
              <label class="custom-file-upload">
                {" "}
                Upload Resume/Cv <br /> Accepted files: PDF, DOC, DOCX, JPEG and
                PNG up to 10MB.v
                <input type="file" name="upload" className={css.inputupload} />
              </label>{" "}
              <br />
            </div>

            <button
              style={{
                width: "80px",
                padding: "10px",
                margin: "auto",
                marginTop: "20px",
              }}
              className={css.submitbutton}
            >
              {" "}
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Careersub;
