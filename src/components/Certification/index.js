import React from "react";
import "./index.css";
import Register from "../Register";
import certificate from "./Certificate.png";

const Certification = () => {
  const cerficate = (
    <div className="certificateContainer">
      <h1 className="certificateH1">Become a Certified TOURISM BUSINESS</h1>
      <h4 className="certificateH4">
        Yes! You will be certified by a{" "}
        <span style={{ color: "#B9FD27" }}>Skill Nation</span> which brings a
        lot of credibility to your certificate & your resume
      </h4>
      <img className="certificateImg" src={certificate} alt="certificate" />
      <Register />
    </div>
  );
  return <div>{cerficate}</div>;
};

export default Certification;
