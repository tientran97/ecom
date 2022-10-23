import React, { useState } from "react";
import { ReactComponent as Line } from "../../images/line.svg";

const Accordion = ({ id, title, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="section" key={id}>
        <div className="content">
          <span className="title" onClick={() => setIsActive(!isActive)}>
            {title}
            <button>
              {isActive ? (
                <div className="button1"></div>
              ) : (
                <div className="button2"></div>
              )}
            </button>
          </span>
          {isActive && <p>{text}</p>}
        </div>

        <Line />
      </div>
    </>
  );
};

export default Accordion;
