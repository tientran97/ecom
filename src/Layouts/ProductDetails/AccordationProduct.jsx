import React, { useState } from "react";
import { ReactComponent as Line } from "../../images/line.svg";
import "aos/dist/aos.css";
import AOS from "aos";

const Accordion = ({
  id,
  title,
  ingredients_text,
  nutrition,
  small_title_1,
  small_title_2,
}) => {
  const [isActive, setIsActive] = useState(false);
  AOS.init();

  return (
    <>
      <div className="accordion-section" key={id}>
        <div className="accordion-content">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <p>{title}</p>
            <button>
              {isActive ? (
                <div className="accordion-button1"></div>
              ) : (
                <div className="accordion-button2"></div>
              )}
            </button>
          </div>
          {isActive && (
            <div
              className="accordion-ingredients"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
            >
              <div className="ingredients">
                <p className="ingredients-title">{small_title_1}</p>
                <p>{ingredients_text}</p>
              </div>
              <div className="allergens">
                <p className="ingredients-title">{small_title_2}</p>
                <p>{nutrition}</p>
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
