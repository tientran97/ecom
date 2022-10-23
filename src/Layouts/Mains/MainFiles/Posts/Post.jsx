import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const newsdata = [
  {
    id: "take-it-cheesy-every-cheese-enthusiast-s-upcoming-go-to-snack",
    image_url:
      "https://cdn.shopify.com/s/files/1/0422/2441/8983/articles/Smoked_Cheese_Salmon_Skin_Campaign_Product_Thumbnail_Lifestyle_01_1080x1350px_1440x.jpg?v=1652870578",
    text: "TAKE IT CHEESY - EVERY CHEESE ENTHUSIAST'S UPCOMING GO-TO SNACK",
  },
  {
    id: "wondrous-world-of-salmon-skin",
    image_url:
      "https://cdn.shopify.com/s/files/1/0422/2441/8983/articles/1_1440x.jpg?v=1630410249",
    text: "WONDROUS WORLD OF SALMON SKIN",
  },
  {
    id: "what-is-fish-skin",
    image_url:
      "https://cdn.shopify.com/s/files/1/0422/2441/8983/articles/14._Fish_Skin_1440x.jpg?v=1644564201",
    text: "WHAT IS FISH SKIN",
  },
  {
    id: "what-is-salted-egg",
    image_url:
      "https://cdn.shopify.com/s/files/1/0422/2441/8983/articles/what_is_salted_egg_header_1440x.png?v=1622183886",
    text: "WHAT IS SALTED EGG?",
  },
  {
    id: "how-our-salted-egg-potato-chips-are-made",
    image_url:
      "https://cdn.shopify.com/s/files/1/0422/2441/8983/articles/15._How_potato_made_1440x.jpg?v=1644564219",
    text: "HOW OUR SALTED EGG POTATO CHIPS ARE MADE!",
  },
];

const Post = () => {
  return (
    <div className="post-container">
      {newsdata.map((item) => {
        return (
          <Link to={`/the-irv-files/${item.id}`}>
            <div key={item.id} className="post-item">
              <img src={item.image_url} alt="post" />
              <p>{item.text}</p>
              <span>BY IRVINS</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Post;
