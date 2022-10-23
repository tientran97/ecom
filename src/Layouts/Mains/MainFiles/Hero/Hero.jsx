import React, { useEffect } from "react";
import "./Banner.css";
const Hero = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="storybanner-container">
      <div className="storybanner-text">
        <span>WHAT IS SALTED EGG ?</span>
        <p>
          What is this flavour that makes up our #DangerouslyAddictive formula?
          How does our salted egg taste just that perfect?
        </p>
      </div>
    </div>
  );
};

export default Hero;
