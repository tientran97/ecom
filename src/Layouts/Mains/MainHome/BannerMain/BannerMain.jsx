import React from "react";
import { ReactComponent as Float } from "../../../../images/svgexport-14.svg";
import Title from "../../../../images/Capture_600x.jpg";
import Code from "../../../../images/Code.jpg";
import Truffin from "../../../../images/Truffin.webp";
import './Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from 'react-router-dom'
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const navigate = useNavigate()
  return (
    <>
      <Slider {...settings}>
        <div className="banner-container1">
          <div className="banner-container--content">
            <img src={Title} alt="title" />
            <p>Enjoy $10 savings( min spend $70)</p>
            <img src={Code} alt="code" />

            <div onClick={()=>navigate('/the-snack-shop')} className="banner-container--content-button">
              <p className="button-text">
                SHOP NOW
                <span className="button-arrow" />
              </p>
            </div>
          </div>
          <div className="banner-container--content-bottom">
            <p>Exclusions and T&amp;C applies.</p>
            <p>Valid from 1 - 10 October only</p>
          </div>
          <div className="banner-container--float">
            <Float />
          </div>
        </div>
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
        <div className="banner-container3">
          <div className="banner-container--content">
            <p>
              SPLENDID <br />
              SALMON SALE
            </p>

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
      </Slider>
    </>
  );
};

export default Banner;
