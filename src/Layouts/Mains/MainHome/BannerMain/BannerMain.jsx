import React from "react";
import { ReactComponent as Float } from "../../../../images/svgexport-14.svg";
import Truffin from "../../../../images/Truffin.webp";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="banner-container2">
        <div className="banner-container--content">
          <img src={Truffin} alt="truffin" />

          <div className="banner-container--content-button">
            <Link to="/the-snack-shop" className="button-text">
              SHOP NOW
              <span className="button-arrow" />
            </Link>
          </div>
        </div>

        <div className="banner-container--float">
          <Float />
        </div>
      </div>
    </>
  );
};

export default Banner;
