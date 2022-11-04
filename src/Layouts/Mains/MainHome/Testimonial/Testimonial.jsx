import React from "react";
import Character from "../../../../images/IrvinsCharacter.png";
import { ReactComponent as Fly } from "../../../../images/svgexport-34.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import './Testimonial.css'
const Testimonial = () => {
  AOS.init();

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-container">
        <div className="testimonial-container--content">
          <div
            className="testimonial-container--content_left"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <p>These Buttery, Savory Salted Egg Snacks Have Our Undying Love</p>
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Logo-Food-WIne_x48.png?v=1637219545"
              alt="foodandwine"
            />
          </div>
          <div
            className="testimonial-container--content_center"
            data-aos-delay="250"
            data-aos="fade-up"
          >
            <p>Let me spell it out for you: fried fish skin is delicious</p>
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Logo-Esquire_x64.png?v=1637219546"
              alt="foodandwine"
            />
          </div>
          <div
            className="testimonial-container--content_right"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <p>
              This rich, salty and crunchy flavor combination is the key to the
              brand’s global success
            </p>
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Logo-Forbes_x48.png?v=1637219560"
              alt=""
            />
          </div>
        </div>
        <div className="testimonial-container--character">
          <div className="testimonial-container--left" data-aos="fade-up">
            <img  src={Character} alt="character" />
          </div>
          <div className="testimonial-container--right" data-aos="fade-up">
            <img src={Character} alt="character" />
          </div>
          <Fly className="testimonial-container--bottom" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
