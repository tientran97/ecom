import React from "react";
import { ReactComponent as A } from "../../../../images/@.svg";
import { ReactComponent as B } from "../../../../images/#.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataSocial from "../../../../data/data.social";
import "./Social.css";
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
    responsive: [
      {
        breakpoint: 2134,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="feed-container">
      <div className="feed-cotaniner--top">
        <div className="feed-container--caption">
          <p>
            <A className="feed-icon" />
            IRVINS.SG
          </p>
          <div>
            <p>
              <B className="feed-icon" />
              DANGEROUSLYADDICTIVE
            </p>
          </div>
        </div>
        <div className="feed-container--caption">
          <p>
            <A className="feed-icon" />
            IRVINS.SG
          </p>
          <div>
            <p>
              <B className="feed-icon" />
              DANGEROUSLYADDICTIVE
            </p>
          </div>
        </div>
        <div className="feed-container--caption">
          <p>
            <A />
            IRVINS.SG
          </p>
          <div>
            <p>
              <B className="feed-icon" />
              DANGEROUSLYADDICTIVE
            </p>
          </div>
        </div>
        <div className="feed-container--caption">
          <p>
            <A className="feed-icon" />
            IRVINS.SG
          </p>
          <div>
            <p>
              <B className="feed-icon" />
              DANGEROUSLYADDICTIVE
            </p>
          </div>
        </div>
      </div>

      <div className="feed-container--social">
        <Slider {...settings}>
          {dataSocial.map((item) => {
            return (
              <>
                <div key={item.id} className="feed-container--main">
                  <img
                    src={require("../../../../images/social/" +
                      "social_" +
                      item.id +
                      ".jpg")}
                    alt="logo"
                  />
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
