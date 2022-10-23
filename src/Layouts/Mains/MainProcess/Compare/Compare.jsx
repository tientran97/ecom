import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Compare.css'
const Compare = () => {
  AOS.init();
  return (
    <div className="compare-container">
      <div
        className="compare-title"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-delay="100"
      >
        <p>IRVINS DOES IT BEST</p>
      </div>
      <div
        className="compare-main"
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-delay="400"
      >
        <div className="compare-background">
          <img
            src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Chip-Bag-Grouped_1000x.png?v=1637648480"
            alt="background"
          />
        </div>
        <div className="compare-text">
          <div className="compare-text--left">
            <p> IRVINS</p>
            <span>Whole Food Ingredients</span>
            <span>Real Duck Egg Yolks</span>
            <span>Upcycled Salmon Skin</span>
            <span>Small Batch Cooking</span>
            <span>Chef Crafted </span>
            <span>Natural Crunch</span>
          </div>
          <div className="compare-text--right">
            <p> THEM</p>
            <span>Artificial "sprayed on" seasonings</span>
            <span>Chicken egg yolks or egg substitute</span>
            <span>Non-sustainable protein</span>
            <span>Assembly line</span>
            <span>Lab-grown, lab-tested </span>
            <span>Processed wheat flour</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
