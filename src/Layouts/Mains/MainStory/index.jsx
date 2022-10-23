import React from "react";
import BannerStory from "./Banner/Banner";
import Ingredient from "./Ingredients/Ingredient";
import Origin from "./Origin/Origin";
import Stripe from "../Stripe";
import VideoStory from "./VideoStory/VideoStory";
import Collab from "./Collabs/Collab";
import Flavor from "../MainHome/FlavorMain/Flavor/FlavorMain";
const index = () => {
  return (
    <>
      <div className="story-container">
        <BannerStory />
        <Origin />
        <Ingredient />
        <Stripe />
        <VideoStory />
        <Collab />
        <Flavor />
      </div>
    </>
  );
};

export default index;
