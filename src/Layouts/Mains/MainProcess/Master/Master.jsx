import React from "react";
import Stripe from "../../Stripe";
import Character from "../../../../images/Group 20.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import './Master.css'
const Master = () => {
  AOS.init();

  return (
    <section className="master-container">
      <Stripe />
      <div className="master-title">
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          HOW WE MASTERED
          <br /> THE SALTED EGG CHIP
        </p>
      </div>
      <div className="master-tree">
        <div className="master-tree-line"></div>
        <div className="master-tree-step">
          <div
            className="step-1"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Eggs_500x.png?v=1637648193"
              alt="egg"
            />
            <div className="master-tree-content ">
              <span className="step">STEP 1</span>
              <p>Hand-pick the best quality duck egg</p>
            </div>
          </div>
          <div
            className="step-2"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Salted-Clay_500x.png?v=1637648231"
              alt="truffle"
            />
            <div className="master-tree-content ">
              <span className="step">STEP 2</span>
              <p>Incubate the eggs in salted clay for 30 days</p>
            </div>
          </div>
          <div
            className="step-3"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Remove-Yolk_500x.png?v=1637648260"
              alt="yolk"
            />
            <div className="master-tree-content ">
              <span className="step">STEP 3</span>
              <p>Rinse and remove the yolk</p>
            </div>
          </div>
          <div
            className="step-4"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Savory-Crumble_500x.png?v=1637648316"
              alt="crumble"
            />
            <div className="master-tree-content ">
              <span className="step">STEP 4</span>
              <p>Cook and blend into a savory crumble</p>
            </div>
          </div>
          <div
            className="step-5"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Salted-Egg-Goodness_500x.png?v=1637648332"
              alt="fish skin"
            />
            <div className="master-tree-content ">
              <span className="step">STEP 5</span>
              <p>
                Gently mix the yolk with our chips to coat every bite with
                salted egg goodness
              </p>
            </div>
          </div>
          <div className="character1">
            <img
              // data-aos="fade-up"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="100"
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Mascot-1_1_200x.png?v=1637648190"
              alt="character1"
            />
          </div>
          <div className="character2">
            <img
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="300"
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Mascot-3_1_200x.png?v=1637648269"
              alt="character"
            />
          </div>
          <div className="character3">
            <img
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="400"
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Mascot-2_1_200x.png?v=1637648301"
              alt="character"
            />
          </div>
          <div className="character4">
            <img src={Character} alt="character" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Master;
