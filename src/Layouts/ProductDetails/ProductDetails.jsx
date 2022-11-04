import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import Accordion from "./AccordationProduct";
import Stripe from "../Mains/Stripe";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/Loader/LoadingSpinner";

import { ADD_TO_CART } from "../../redux/Slice/cartSlice";
import { useDispatch } from "react-redux";
import "aos/dist/aos.css";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import useFetchDocument from "../../customHooks/useFetchDocument.js";
import useFetchCollection from "../../customHooks/useFetchCollection";
import Review from "./Review/Review";
const ProductDetails = () => {
  AOS.init();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(ADD_TO_CART(product));
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  //get product from custom hook
  const { document } = useFetchDocument("products", id);
  const { data } = useFetchCollection("reviews");
  
  const filterReviews = data?.filter((review) => review.productID === id);
  console.log("🚀 ~ file: ProductDetails.jsx ~ line 32 ~ ProductDetails ~ filterReviews", filterReviews)

  useEffect(() => {
    setProduct(document);
  }, [document, data]);

  return (
    <>
      {product === null ? (
        <LoadingSpinner />
      ) : (
        <div key={id} className="productDetails-container">
          <>
            <div className="productDetails-content">
              <div className="productDetails-top">
                <div
                  className="productDetails-top-left"
                  style={{
                    backgroundColor: `${product.background_color}`,
                  }}
                >
                  <img
                    data-aos="zoom-in-up"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    className="main-thumbs"
                    src={product.main_image_url}
                    alt="product"
                  />
                </div>
                <div className="productDetails-top-right">
                  <div
                    className="back-to-shop-button"
                    onClick={() => navigate("/the-snack-shop/#products")}
                  >
                    &larr; BACK TO SHOP
                  </div>
                  <p className="productDetails-title">{product.name}</p>
                  <span className="productDetails-price">
                    $ {Number(product.price).toFixed(2)} SGD
                  </span>
                  <div className="productDetails-button-main">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="productDetails-button"
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <p className="productDetails-disc">{product.disc_text}</p>
                  <div className="productDetails-logo">
                    <div className="logo-item">
                      <img
                        data-aos="flip-left"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="200"
                        src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Halal-Logo-min_720x.png?v=1640593085"
                        alt="logo"
                      />
                      <span>Halal Certified</span>
                    </div>
                    <div className="logo-item">
                      <img
                        data-aos="flip-right"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="250"
                        src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Hand-Cooked-min_720x.png?v=1640593119"
                        alt="logo"
                      />
                      <span>Hand Cooked</span>
                    </div>
                    <div className="logo-item">
                      <img
                        data-aos="flip-left"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="300"
                        src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Made-in-SG-min_720x.png?v=1640593103"
                        alt="logo"
                      />
                      <span>Made In Singapore</span>
                    </div>
                    <div className="logo-item">
                      <img
                        data-aos="flip-right"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="350"
                        src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Real-Salted-Egg--min_720x.png?v=1640593101"
                        alt="logo"
                      />
                      <span>Real Salted Egg</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productDetails-mid">
                <Accordion
                  title="INGREDIENT"
                  ingredients_text={product.ingredient_text}
                  nutrition={product.ellergens_text}
                  small_title_1="INGREDIENT"
                  small_title_2="ALLERGENS"
                />
                <Accordion
                  title="PRODUCT INFO"
                  small_title_2="NUTRITION"
                  ingredients_text={product.product_info}
                  nutrition={product.nutrition}
                />
              </div>
              <Stripe />
              <div className="productDetails-bot">
                <div
                  className="productDetails-bot-image-1"
                  data-aos="slide-right"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="200"
                >
                  <img
                    style={{
                      backgroundColor: `${product.background_color}`,
                    }}
                    className="main-image"
                    src={product.main_image_url}
                    alt=""
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/image-mask_1024x_cb6fa004-6062-4396-8395-89bf9aa6059d_1024x.png?v=1639383019"
                    alt=""
                    className="background-image"
                  />
                  <div className="text-box">{product.character_box_1}</div>

                  <img
                    className="character"
                    src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Irvin-Mascot_x176_380fce0f-1409-44e9-a38b-a30f4075cdb9_x176.png?v=1639382937"
                    alt=""
                  />
                </div>
                <div
                  className="productDetails-bot-image-2"
                  data-aos="slide-left"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="200"
                >
                  <img
                    className="main-image"
                    src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/featured_secondary_salted_egg_1024x.jpg?v=1639363565"
                    alt=""
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/image-mask_1024x_cb6fa004-6062-4396-8395-89bf9aa6059d_1024x.png?v=1639383019"
                    alt=""
                    className="background-image"
                  />
                  <div className="text-box">{product.character_box_2}</div>
                  <img
                    className="character"
                    src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Fish-Macot_x326_ef619458-acde-474e-ab0e-c33731c5327e_x326.png?v=1639382940"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <Review filterReviews={filterReviews} />
          </>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
