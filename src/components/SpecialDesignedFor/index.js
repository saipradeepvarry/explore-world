import React from "react";
import "./index.css";
const SpecialDesignedFor = () => {
  const special = (
    <div className="specialmainContainer">
      <div className="priceContainer">
        <p className="specP001">Price increases in </p>
        <p className="specP001">
          min <span className="timer">00</span> sec{" "}
          <span className="timer">00</span>
        </p>
      </div>
      <div className="priceContainer">
        <h1 className="specH1">
          <span className="s2000">₹2000</span> ₹99
        </h1>
        <button type="button" className="btn btn-danger">
          Register Now
        </button>
        <p className="specP1">100% Money Back Gaurantee</p>
      </div>
    </div>
  );
  return <div className="specialContainer">{special}</div>;
};

export default SpecialDesignedFor;
