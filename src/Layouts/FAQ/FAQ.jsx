import React, { useEffect } from "react";
import "./FAQ.css";
import dataFAQ from "../../data/data.faq";
import Accordion from "./Accordion";
const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <div className="FAQcontainer">
        <div className="top">
          <p className="heading">
            FREQUENTLY ASKED
            <br /> QUESTIONS
          </p>
        </div>
        <div className="bot">
          {dataFAQ.map((item) => {
            return (
              <Accordion
                id={item.id}
                title={item.title}
                text={item.text}
              ></Accordion>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
