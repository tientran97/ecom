import React from "react";
import Stripe from "../../Mains/Stripe";
import "./FooterBottom.css";
const FooterBot = () => {
  return (
    <div className="footerBot-container">
      <div className="footerBot-container--content">
        <div className="footerBot-container--content_left">
          <p>PRIVACY POLICY TERMS OF SERVICE &copy; 2022, COCOBA PTE. LTD.</p>
        </div>
        <div className="footerBot-container--content_right">
          <p>SINGAPORE</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBot;
