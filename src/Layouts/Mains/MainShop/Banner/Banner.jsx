import React, { useState, useEffect, useRef } from "react";
import Title from "../../../../images/Capture_600x.jpg";
import Code from "../../../../images/Code.jpg";
import { ReactComponent as Float } from "../../../../images/svgexport-14.svg";
import "./Banner.css";
const Banner = () => {
  const [timeDays, setTimeDays] = useState("00");
  const [timeHours, setTimeHours] = useState("00");
  const [timeMinutes, setTimeMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("November 15, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance > 0) {
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
      } else {
        clearInterval(interval.current);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <section className="banner-container ">
      <div className="banner-shop--content">
        <img src={Title} alt="title" />
        <br />
        <img className="code" src={Code} alt="code" />
        <p className="enjoy">Enjoy $10 savings( min spend $70)</p>
        <p className="sale-end">Hurry! Sale ending in</p>
        <div className="time-countdown">
          <div className="day">
            <span className="time">{timeDays}</span>
            <span className="unit">Days</span>
          </div>
          <div className="hours">
            <span className="time">{timeHours}</span>
            <span className="unit">Hours</span>
          </div>
          <div className="minutes">
            <span className="time">{timeMinutes}</span>
            <span className="unit">Minutes</span>
          </div>
          <div className="seconds">
            <span className="time">{timeSeconds}</span>
            <span className="unit">Seconds</span>
          </div>
        </div>
      </div>
      <div className="banner-container--float">
        <Float />
      </div>
    </section>
  );
};

export default Banner;
