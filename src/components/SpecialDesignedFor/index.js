import React, { useState, useEffect } from "react";
import "./index.css";

const SpecialDesignedFor = () => {
  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const targetTime = new Date(currentTime.getFullYear(), 5, 3, 0, 0, 0); // June 3rd midnight
    const difference = targetTime - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference,
      };
    } else {
      timeLeft = { days: 0, minutes: 0, seconds: 0, total: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(countdown);
        setTimerFinished(true);
      }
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="specialContainer">
      <div className="specialmainContainer">
        <div className="priceContainer">
          <p className="specP001">Price increases in</p>
          <p className="specP001">
            {timeLeft.days} days {formatTime(timeLeft.minutes)} min{" "}
            <span className="timer">{formatTime(timeLeft.seconds)}</span> sec
          </p>
        </div>
        <div className="priceContainer">
          <h1 className="specH1">
            <span className="s2000">₹2000</span> ₹99
          </h1>
          <a
            type="button"
            className="btn btn-danger"
            href="https://pages.razorpay.com/tourismbusiness"
          >
            Register Now
          </a>
          <p className="specP1">100% Money Back Guarantee</p>
        </div>
      </div>
      {timerFinished && (
        <div className="bomb-blast-animation">
          <div className="bomb"></div>
          <div className="blast"></div>
        </div>
      )}
    </div>
  );
};

export default SpecialDesignedFor;
