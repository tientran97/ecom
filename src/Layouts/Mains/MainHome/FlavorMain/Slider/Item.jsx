import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as ArrowLeft } from "../../../../../images/svgexport-18.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Item.css";

import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../../../../redux/Slice/cartSlice";
import { Link } from "react-router-dom";
import useFetchCollection from "../../../../../customHooks/useFetchCollection";
import LoadingSpinner from "../../../../../components/Loader/LoadingSpinner";
import {
  STORE_PRODUCTS,
} from "../../../../../redux/Slice/productSlice";
const Item = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  AOS.init();
  const dispatch = useDispatch();
  const { data, isLoading } = useFetchCollection("products");

  const handleAddToCart = (product) => {
    dispatch(ADD_TO_CART(product));
  };
  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch, data]);
  return (
    <>
      <div className="slider-container">
        {isLoading ? (
          <LoadingSpinner />
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
                    <button className="button-info">
                      <Link to={`/products-details/${product.id}`}>
                        INFOMATION
                      </Link>
                    </button>
                  </div>
                  <div className="slider-container--items_content">
                    <p className="slider-container--items_content__title">
                      {product.name}
                    </p>
                    <p className="slider-container--items_content_price">
                      ${Number(product.price).toFixed(2)} SGD
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
