import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataOrigin from "../../../../data/data.origin";
import './Origin.css'
const Origin = () => {
     AOS.init();
     const settings = {
       dots: true,
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 3,
       speed: 1000,
     };
  return (
    <div className="story-content">
      <div
        className="story-content--title"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <p>
          STARTED FROM A RESTAURANT <br /> NOW WE’RE HERE
        </p>
      </div>
      <div
        className="story-content--slider"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Slider {...settings}>
          {dataOrigin.map((item) => {
            return (
              <section
                key={item.id}
                className="story-content--slider_item"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="story-content--slider_item_main">
                  <span className="story-content--slider_item__year">
                    {item.year}
                  </span>
                  <img src={item.image_url} alt="story" />
                </div>
                <div className="story-content--slider_item__box">
                  <p>{item.text}</p>
                </div>
              </section>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Origin