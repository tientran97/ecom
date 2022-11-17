import React from "react";
// import Title from "../../../../images/Capture_600x.jpg";
// import Code from "../../../../images/Code.jpg";
import { ReactComponent as Float } from "../../../../images/svgexport-14.svg";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  AOS.init();

  return (
    <section className="banner-container ">
      <div className="banner-shop--content">
      
        <p  >
          THE
        </p>
        <p  >
          SNACK
        </p>
        <p  >
          SHOP
        </p>
      </div>
      <div className="banner-container--float">
        <Float />
      </div>
    </section>
  );
};

export default Banner;
