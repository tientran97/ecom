import React from "react";
import Avatar1 from "../../../../images/cardib_400x.png";
import Avatar2 from "../../../../images/testimonial2_400x.png";
import Avatar3 from "../../../../images/testimonial3_400x.png";
import Avatar4 from "../../../../images/testimonial4_400x.png";
import ChipLeft from "../../../../images/ChipsLeft_280x.png";
import ChipRight from "../../../../images/ChipsRight_150x.png";
import Stripe from "../../Stripe";
import { ReactComponent as Path1 } from "../../../../images/Path 3.svg";
import { ReactComponent as Path2 } from "../../../../images/Path 3-1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ReviewMain.css";
const Critical = () => {
  AOS.init();

  return (
    <>
      <div className="critical-container">
        <div className="critical-container--content">
          <div className="critical-container--content_title" data-aos="flip-up">
            <p>
              <span data-aos="flip-up">people</span>
              <span data-aos="flip-up" data-aos-delay="150">
                LOVE
              </span>
              <span data-aos="flip-up" data-aos-delay="200">
                IRVINS
              </span>
            </p>
          </div>
          <div className="critical-container--content_1" data-aos="fade-up">
            <img src={Avatar1} alt="avatar" />
            <div>
              <p>"I JUST LOOOOOOVE THE SALMON SKIN"</p>
              <span>CARDI B</span>
            </div>
            <div className="path">
              <Path1 />
            </div>
          </div>
          <div
            className="critical-container--content_2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img src={Avatar2} alt="avatar" />
            <div className="quotes">
              <p>
                "These chips contain the glorious flavor of salted egg and have
                finally made it to the States from Singapore"
              </p>
              <span className="author">@STEVENKWLIM</span>
            </div>
            <div className="path">
              <Path1 />
            </div>
          </div>
          <div
            className="critical-container--content_3"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="quotes">
              <p>"Want some? Fight me."</p>
              <span className="author">@THEWESLEYCHAN</span>
            </div>
            <img src={Avatar3} alt="avatar" />
            <div className="path">
              <Path2 />
            </div>
          </div>
          <div
            className="critical-container--content_4"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <img src={Avatar4} alt="avatar" />
            <div className="quotes">
              <p>
                "THE HYPE IS REAL. One bag is definitely not enough because
                these are dangerously addicting. Hands down, our favorite
                snack."
              </p>
              <span className="author">@CALIFORNIACALORIES</span>
            </div>
            <div className="path">
              <Path2 />
            </div>
          </div>
        </div>
        <div
          className="critical-container--content_images"
         
        >
          <img
            className="critical-container--content_images_left"
            src={ChipLeft}
            alt="chip"
          />
          <img
            className="critical-container--content_images_right"
            src={ChipRight}
            alt="chip"
          />
        </div>
      </div>
      <Stripe />
    </>
  );
};

export default Critical;
