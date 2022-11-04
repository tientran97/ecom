import React from "react";
import Image1 from "../../../images/Logo_on_website_footer_130x2x.png";
import Image2 from "../../../images/Dangerously_Addictive_badge_1_1_150x.png";
import "./FooterMid.css";
import { useNavigate } from "react-router-dom";
const FooterMid = () => {
  const navigate = useNavigate();
  return (
    <div className="footerMid-container">
      <div className="footerMid-container--content">
        <div className="footerMid-container--content_left">
          <div className="footerMid-container--content_left1">
            <img src={Image1} alt="logo" onClick={() => navigate("/")} />
          </div>
          <div className="footerMid-container--content_left2">
            <p onClick={() => navigate("/the-snack-shop")}>SHOP</p>

            <p onClick={() => navigate("/accounts/profile")}>MY ACCOUNT</p>

            <p onClick={() => navigate("/frequently-asked-questions")}>FAQ</p>
            <p onClick={() => navigate("/find-irvins-near-you")}>FIND US</p>
          </div>
          <div className="footerMid-container--content_left3">
            <p onClick={() => navigate("/our-story")}>OUR STORY</p>

            <p onClick={() => navigate("/the-irv-files")}>THE IRV FILE</p>
            <p onClick={() => navigate("/counterfeit-protection")}>
              COUNTERFEIT <br /> PROTECTION
            </p>
          </div>
        </div>
        <div className="footerMid-container--content_right">
          <div className="footerMid-container--content_right1">
            <p>COCOBA PTE LTD</p>
            <p>421 TAGORE INDUSTRIAL AVENUE</p>
            <p>TAGORE 8, #01-29</p>
            <p>SINGAPORE 787805</p>
          </div>
          <div className="footerMid-container--content_right2">
            <img src={Image2} alt="badge" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMid;
