import React from "react";
import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Photo from "./image 1.png";
const Header = () => {
  const [activeRoute, setActiveRoute] = useState("");
  const head = (
    <div className="headerContainner">
      <div>
        <Link
          to="/"
          onClick={() => {
            setActiveRoute("home");
          }}
        >
          <img className="imgLogo" src={Photo} alt="Logo" />
        </Link>
      </div>
      <div className="navContainer">
        <Link to="/">
          <button
            className={activeRoute === "home" ? "activeBtn" : "notActiveBtn"}
            value="home"
            onClick={() => {
              setActiveRoute("home");
            }}
          >
            Home
          </button>
        </Link>

        <a
          href="https://pages.razorpay.com/tourismbusiness"
          className="btn btn-danger"
        >
          Register Now
        </a>
      </div>
    </div>
  );
  return <div>{head}</div>;
};

export default Header;
