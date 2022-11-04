import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as ArrowLeft } from "../../../../../images/svgexport-18.svg";
import { ReactComponent as ArrowRight } from "../../../../../images/svgexport-19.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Item.css";

import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../../../../redux/Slice/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import useFetchCollection from "../../../../../customHooks/useFetchCollection";
import LoadingSpinner from "../../../../../components/Loader/LoadingSpinner";
import {
  selectProducts,
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
  };
  AOS.init();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useFetchCollection("products");
  const products = useSelector(selectProducts);

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
