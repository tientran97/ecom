import React from "react";
import Hero from "./Hero/Hero";
import Post from "./Posts/Post";
import Social from "../MainHome/Social/Social";
import Flavor from "../MainHome/FlavorMain/Flavor/FlavorMain";

const index = () => {
  return (
    <>
      <Hero />
      <Post />
      <Social />
      <Flavor />
    </>
  );
};

export default index;
