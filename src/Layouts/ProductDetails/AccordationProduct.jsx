import React, { useState } from "react";
import { ReactComponent as Line } from "../../images/line.svg";
import "aos/dist/aos.css";
import AOS from "aos";


const Accordion = ({
  id,
  title,
  ingredients_text,
  allergens,
  ingredients_1_image,
  ingredients_2_image,
  ingredients_3_image,
  ingredients_4_image,
  small_title_1,
  small_title_2,
}) => {
  const [isActive, setIsActive] = useState(false);
  AOS.init();

  return (
    <>
      <div className="accordion-section" key={id}>
        <div className="accordion-content">
          <span
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            {title}
            <button>
              {isActive ? (
                <div className="accordion-button1"></div>
              ) : (
                <div className="accordion-button2"></div>
              )}
            </button>
          </span>
          {isActive && (
            <div
              className="accordion-ingredients"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              {ingredients_1_image && (
                <div className="accordion-ingredients-image">
                  <img src={ingredients_1_image} alt="" />
                  <img src={ingredients_2_image} alt="" />
                  <img src={ingredients_3_image} alt="" />
                  <img src={ingredients_4_image} alt="" />
                </div>
              )}
              <div className="ingredients">
                <p className="ingredients-title">{small_title_1}</p>
                <p>{ingredients_text}</p>
              </div>
              <div className="allergens">
                <p className="ingredients-title">{small_title_2}</p>
                <p>{allergens}</p>
              </div>
            </div>
          )}
        </div>

        <Line />
      </div>
    </>
  );
};

export default Accordion;
