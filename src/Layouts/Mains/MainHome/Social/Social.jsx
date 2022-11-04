import React from "react";
import { ReactComponent as A } from "../../../../images/@.svg";
import { ReactComponent as B } from "../../../../images/#.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataSocial from "../../../../data/data.social";
import './Social.css'
const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="feed-container">
      <div className="feed-cotaniner--top">
        <div className="feed-container--caption">
          <p>
            <A />
            IRVINS.SG
          </p>
          <div>
            <B />
            DANGEROUSLYADDICTIVE
          </div>
        </div>
        <div className="feed-container--caption">
          <p>
            <A />
            IRVINS.SG
          </p>
          <div>
            <B />
            DANGEROUSLYADDICTIVE
          </div>
        </div>
        <div className="feed-container--caption">
          <p>
            <A />
            IRVINS.SG
          </p>
          <div>
            <B />
            DANGEROUSLYADDICTIVE
          </div>
        </div>
        <div className="feed-container--caption">
          <p>
            <A />
            IRVINS.SG
          </p>
          <div>
            <B />
            DANGEROUSLYADDICTIVE
          </div>
        </div>
      </div>

      <div className="feed-container--social">
        <Slider {...settings}>
          {dataSocial.map((item, index) => {
            return (
              <>
                <div key={index} className="feed-container--main">
                  <img src={item.img_url} alt="logo" />
                  <a href={item.link} target="_blank" className="overlay">
                    <div className="overlay-text">{item.text}</div>
                  </a>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderBanner;
