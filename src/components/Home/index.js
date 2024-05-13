import React from "react";
import "./index.css";
import Header from "../Header";
import AboutWorkshop from "../AboutWorkshop";
import CheckboxList from "../CheckboxList";
import Reviews from "../Reviews";
import WhatYouGet from "../WhatYouGet";
import WhyAttendingWorkshop from "../WhyAttendingWorkshop";
import Bonuses from "../Bonuses";
import Certification from "../Certification";
import SpecialDesignedFor from "../SpecialDesignedFor";
import MeetYourMentor from "../MeetYourMentor";
import FAQSection from "../FAQSection";

import Register from "../Register";
const Home = () => (
  <div className="homeinnerContainer">
    <Header />
    <AboutWorkshop />
    <CheckboxList />
    <Reviews />
    <Register />
    <WhatYouGet />
    <WhyAttendingWorkshop />
    <Bonuses />
    <Certification />
    <SpecialDesignedFor />
    <MeetYourMentor />
    <FAQSection />
  </div>
);

export default Home;
