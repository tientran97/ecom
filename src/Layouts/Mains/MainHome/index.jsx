import React, { useEffect } from "react";
import Banner from "./BannerMain/BannerMain";
import FlavorMain from "./FlavorMain/Flavor/FlavorMain";
import ReviewMain from "./ReviewMain/ReviewMain";
import Social from "./Social/Social";
import Testimonial from "./Testimonial/Testimonial";
import Video from "./VideoMain/Video";

const MainHome = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Banner />
      <FlavorMain />
      <Testimonial />
      <Video />
      <ReviewMain />
      <Social />
    </>
  );
};

export default MainHome;
