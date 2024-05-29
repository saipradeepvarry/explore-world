import React from "react";
import "./index.css";
import Register from "../Register";
import BulletPoints from "../BulletPoints";
import Abjphoto from "./EXPLORERS MEETING.png";
const AboutWorkshop = () => {
  const workshopdate = (
    <div className="workShopDateContainer">
      <div className="headContainer">
        <h1 className="headTime">8th June</h1>
        <h3 className="headDate">Date</h3>
      </div>
      <div className="headContainer">
        <h1 className="headTime">6:30 - 9:30PM</h1>
        <h3 className="headDate">TIME</h3>
      </div>
      <div className="headContainer">
        <h1 className="headTime">Bonuses</h1>
        <h3 className="headDate">Worth Rs 12,000 for Free</h3>
      </div>
      <div className="headContainer">
        <h1 className="headTime">20000+</h1>
        <h3 className="headDate">attended</h3>
      </div>
    </div>
  );
  return (
    <div className="AboutWorkshopContainer">
      <div className="AboutWorkShopInnerContainer">
        <h2 className="contentText">
          Are you passionate about <span className="spanHighlight">travel</span>
          and dreaming of{" "}
          <span className="spanHighlight">
            starting your own tourism business?
          </span>
        </h2>
        <h2 className="contentText">
          Join us for an intensive{" "}
          <span className="spanHighlight">three-hour workshop.</span>
        </h2>
        <h2 className="contentText">
          where we'll guide you through the essential steps of{" "}
          <span className="spanHighlight">
            launching your venture with minimal investment.
          </span>
        </h2>
        <h3 className="contentText02">
          (WITHOUT BUYING EXPENSIVE TOOLS OR ANY PRIOR KNOWLEDGE)
        </h3>{" "}
        <div class="video-container">
          <iframe
            title="myFrame"
            className="iframeVideo"
            src="https://www.youtube.com/embed/WCK9zQyW9pc?controls=1"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <img src={Abjphoto} alt="apj" className="apjImg" />
          <div>
            {" "}
            {<Register />}
            {<BulletPoints />}
          </div>
        </div>
        {workshopdate}
        <h5 className="lastbatchText">
          ***Be Quick! Last few seats are remaining for this batch!***
        </h5>
      </div>
    </div>
  );
};

export default AboutWorkshop;
