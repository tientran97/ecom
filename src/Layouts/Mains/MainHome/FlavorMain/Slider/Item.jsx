import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as ArrowLeft } from "../../../../../images/svgexport-18.svg";
import { ReactComponent as ArrowRight } from "../../../../../images/svgexport-19.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Item.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../redux/Slice/cartSlice";
import { useGetAllProductsQuery } from "../../../../../redux/Slice/productsApi";
import { useNavigate } from "react-router-dom";
const Item = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,

    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };
  AOS.init();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <div className="slider-container">
        {isLoading ? (
          <p> Loading....</p>
        ) : error ? (
          <p>An error occured....</p>
        ) : (
          <Slider {...settings}>
            {data.map((product) => {
              return (
                <div
                  key={product.id}
                  className="slider-container--items"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div
                    className="slider-container--items_image"
                    style={{ backgroundColor: `${product.background_color}` }}
                  >
                    <img
                      className="slider-container--items_image__main"
                      src={product.main_image_url}
                      alt=""
                    />
                    <button
                      className="button-add"
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD TO CART
                    </button>
                    <button
                      className="button-info"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      INFOMATION
                    </button>
                  </div>
                  <div className="slider-container--items_content">
                    <p className="slider-container--items_content__title">
                      {product.name}
                    </p>
                    <p className="slider-container--items_content_price">
                      ${Number(product.price).toFixed(2)} SGD
                    </p>
                    <p className="slider-container--items_content__star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span>{product.review_number} reviews</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </>
  );
};

export default Item;
