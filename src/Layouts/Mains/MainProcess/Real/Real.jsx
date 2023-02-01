import React, { useEffect } from "react";
import dataIngredients from "../../../../data/data.ingredients";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Real.css";
const Real = () => {
  AOS.init();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 2134,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 0,
          dots: false,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="real-container">
      <div className="real-container--title">
        <p
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          REAL INGREDIENTS.
          <br />
          IRRESISTIBLE FLAVOR
        </p>
      </div>
      <div className="real-container--content">
        <Slider {...settings}>
          {dataIngredients.map((item) => {
            return (
              <div key={item.id} className="real-container--content_item">
                <img src={item.img_url} alt="item" />
                <div
                  className="real-container--content_item__text"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                >
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Real;
