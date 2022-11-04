import React from "react";
import { ReactComponent as FaceBook } from "../../../images/Group 14.svg";
import { ReactComponent as Instagram } from "../../../images/Group 11.svg";
import { ReactComponent as Tiktok } from "../../../images/Group 30.svg";
import Character from "../../../images/IrvinsCharacter.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FooterTop.css";
const FooterTop = () => {
  AOS.init();

  return (
    <div className="footerTop-container">
      <div className="footerTop-container--content">
        <div className="footerTop-container--content_title" data-aos="fade-up">
          <p>SWERVE WITH IRINS</p>
        </div>
        <div className="footerTop-container-content_social">
          <a href="https://www.instagram.com/irvins.sg/" target="_blank">
            <span data-aos="fade-up" data-aos-delay="150">
              <Instagram />
            </span>
          </a>

          <a href="https://www.facebook.com/irvins.singapore" target="_blank">
            <span data-aos="fade-up" data-aos-delay="200">
              <FaceBook />
            </span>
          </a>
          <a href="https://www.tiktok.com/@irvins.global" target="_blank">
            <span data-aos="fade-up" data-aos-delay="250">
              <Tiktok />
            </span>
          </a>
        </div>
        <div className="footerTop-container--content_character">
          <img src={Character} alt="character" />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
