import React, { useEffect } from "react";
import Banner from "../../../../images/Our_Story_1800x.webp";
import "./Banner.css";
const BannerStory = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="story-banner">
      <img src={Banner} alt="banner" />
      <p>
        OUR ORIGIN <br />
        STORY
      </p>
      <span>WHO WE ARE</span>
    </div>
  );
};

export default BannerStory;
