import React from "react";
import { ReactComponent as Chili } from "../../../../images/noun_Chili_3057434.svg";
import { ReactComponent as Egg } from "../../../../images/noun_Egg_1775207.svg";
import { ReactComponent as Potato } from "../../../../images/noun_Potato Chips_3846037.svg";
import { ReactComponent as Leaves } from "../../../../images/noun_leaves_1840727.svg";
import Brand_Video from "../../../../images/Brand_Video.mp4";
import Pile from "../../../../images/pile_600x.png";
import Stripe from "../../Stripe";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Video.css";
import { useNavigate } from "react-router-dom";
const Video = () => {
  AOS.init();
  const navigate = useNavigate();
  return (
    <div className="video-container">
      <Stripe />
      <div className="video-container--content">
        <div
          className="video-container--content_title"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
        >
          <p>WE PERFECTED THE SALTED EGG CHIP</p>
        </div>
        <div className="video-container--content_main">
          <div className="video-container--content_main__text">
            <div className="video-container--content_main__text1">
              <p data-aos="fade-right" data-aos-duration="1000">
                SALTED EGG
              </p>
            </div>
            <p
              className="video-container--content_main__text2"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              CURRY LEAVES
            </p>
            <p
              className="video-container--content_main__text3"
              data-aos="fade-right"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              BIRDS EYE CHILIS
            </p>
            <p
              className="video-container--content_main__text4"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              UPCYCLED SALMON SKIN
            </p>
            <p
              className="video-container--content_main__text5"
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              POTATO
            </p>
            <p
              className="video-container--content_main__text6"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              CASSAVA ROOT
            </p>
          </div>
          <div className="video-container--content_main__video">
            <video width="1400" height="700" autoPlay loop muted>
              <source src={Brand_Video} />
            </video>
          </div>
        </div>

        <div
          className="video-container--content_ingredients"
          data-aos="fade-up"
        >
          <div>
            <Chili />
            <p>WHOLE FOOD INGREDIENTS</p>
          </div>
          <div>
            <Egg />
            <p>
              REAL DUCK <br />
              EGG YOLK
            </p>
          </div>
          <div>
            <Potato />
            <p>
              CHEF
              <br /> CRAFTED
            </p>
          </div>
          <div>
            <Leaves />
            <p>
              NO WHEAT
              <br /> FLOUR
            </p>
          </div>
        </div>
        <div
          className="video-container--content_button"
          onClick={() => navigate("/our-process")}
        >
          <p className="video-container--content_button__text">
            HOW IT'S MADE
            <span className="video-container--content_button__text__arrow"></span>
          </p>
        </div>
        <img className="video-container--content_image" src={Pile} alt="pile" />
      </div>
    </div>
  );
};

export default Video;
