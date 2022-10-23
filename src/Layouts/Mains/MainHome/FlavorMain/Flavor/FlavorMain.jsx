import React from "react";
import Item from "../Slider/Item";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Flavor.css";
import { useNavigate } from "react-router-dom";
const FlavorMain = () => {
  AOS.init();
  const navigate = useNavigate();

  return (
    <>
      <div className="flavor-container">
        <p className="flavor-container--title " data-aos="fade-up">
          FIND YOUR FLAVOR
        </p>
        
      </div>
      <Item />
      <button
        onClick={() => navigate("/the-snack-shop")}
        className="flavor-button"
      >
        SHOP ALL FLAVOR
      </button>
    </>
  );
};

export default FlavorMain;
