import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Comment.css'
const Comment = () => {
  AOS.init();

  return (
    <div className="comment-container">
      <div className="comment-left">
        <img
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/slice_1_1070x.png?v=1637648629"
          alt="ingredients"
        />
      </div>
      <div className="comment-right">
        <div
          className="comment-1"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <p>
            The hardest thing to do is not eat all of them in one sitting,
            because these bad boys are irresistible. Give these folks the keys
            to the city. They’re in charge of everything now.
          </p>
          <br />
        </div>
        <div
          className="comment-2"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
        >
          <p>Get it before you die, or else you're missing out.</p>
          <br />
        </div>
        <div
          className="comment-3"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
        >
          <p>
            There's no skimping on the salted egg seasoning. Each piece of fish
            is completely covered in salty egg bites. Very crunchy and savory.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Comment;
