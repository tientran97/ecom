import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import Accordion from "./AccordationProduct";
import Stripe from "../Mains/Stripe";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/Slice/productsApi";
import { addToCart } from "../../redux/Slice/cartSlice";
import { useDispatch } from "react-redux";
import "aos/dist/aos.css";
import AOS from "aos";

const ProductDetails = () => {
  AOS.init();
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const initialProductDetail = {
    id: "",
    background_color: "",
    main_image_url: "",
    image_url_2: "",
    image_url_3: "",
    image_url_4: "",
    review_number: "",
    price: "",
    name: "",
    disc_text: "",
    ingredient_image_url_1: "",
    ingredient_image_url_2: "",
    ingredient_image_url_3: "",
    ingredient_image_url_4: "",
    ingredient_desc: "",
    ellergens_desc: "",
    product_info: "",
    character_box_1: "",
    character_box_2: "",
    side_image_left: "",
    side_image_right: "",
    accordion_title_1: "",
    accordion_title_2: "",
    small_title_1: "",
    small_title_2: "",
    small_title_3: "",
    review_rate: "",
    review: [],
  };

  const [selectedProduct, setSelectedProduct] = useState(initialProductDetail);
  const params = useParams();
  const currentId = params.id;

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const productsId = currentId;
    const selectedProduct =
      data?.find((item) => item.id === productsId) || initialProductDetail;
    setSelectedProduct(selectedProduct);
  }, [currentId, data]);

  return (
    <>
      {isLoading ? (
        <p> Loading....</p>
      ) : error ? (
        <p>An error occured....</p>
      ) : (
        <div className="productDetails-container">
          <>
            <div className="productDetails-content">
              <div className="productDetails-top">
                <div
                  className="productDetails-top-left"
                  style={{
                    backgroundColor: `${selectedProduct.background_color}`,
                  }}
                >
                  <img
                    data-aos="zoom-in-up"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="100"
                    className="main-thumbs"
                    src={selectedProduct.main_image_url}
                    alt="product"
                  />
                </div>
                <div className="productDetails-top-right">
                  <div className="productDetails-reviews-number">
                    {selectedProduct.review_number} reviews
                  </div>
                  <p className="productDetails-title">{selectedProduct.name}</p>
                  <span className="productDetails-price">
                    $ {Number(selectedProduct.price).toFixed(2)} SGD
                  </span>
                  <div className="productDetails-button-main">
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="productDetails-button"
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <p className="productDetails-disc">
                    {selectedProduct.disc_text}
                  </p>
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
                <img
                  data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="250"
                  src={selectedProduct.side_image_left}
                  alt=""
                  className="side-image-left"
                />
                <img
                  data-aos="fade-left"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="350"
                  src={selectedProduct.side_image_right}
                  alt=""
                  className="side-image-right"
                />

                <Accordion
                  title={selectedProduct.accordion_title_1}
                  ingredients_text={selectedProduct.ingredient_desc}
                  allergens={selectedProduct.ellergens_desc}
                  ingredients_1_image={selectedProduct.ingredient_image_url_1}
                  ingredients_2_image={selectedProduct.ingredient_image_url_2}
                  ingredients_3_image={selectedProduct.ingredient_image_url_3}
                  ingredients_4_image={selectedProduct.ingredient_image_url_4}
                  small_title_1={selectedProduct.small_title_1}
                  small_title_2={selectedProduct.small_title_2}
                />
                <Accordion
                  title={selectedProduct.accordion_title_2}
                  small_title_2={selectedProduct.small_title_3}
                  ingredients_text={selectedProduct.product_info}
                  allergens={selectedProduct.nutrition}
                />
              </div>
              <Stripe />
              <div className="productDetails-bot">
                <div className="productDetails-bot-image-1">
                  <img
                    className="main-image"
                    src={selectedProduct.image_url_3}
                    alt=""
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/image-mask_1024x_cb6fa004-6062-4396-8395-89bf9aa6059d_1024x.png?v=1639383019"
                    alt=""
                    className="background-image"
                  />
                  <div className="text-box">
                    {selectedProduct.character_box_1}
                  </div>

                  <img
                    className="character"
                    src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Irvin-Mascot_x176_380fce0f-1409-44e9-a38b-a30f4075cdb9_x176.png?v=1639382937"
                    alt=""
                  />
                </div>
                <div className="productDetails-bot-image-2">
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
                  <div className="text-box">
                    {selectedProduct.character_box_2}
                  </div>
                  <img
                    className="character"
                    src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Fish-Macot_x326_ef619458-acde-474e-ab0e-c33731c5327e_x326.png?v=1639382940"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <Review
            review_number={selectedProduct.review_number}
            review_rate={selectedProduct.review_rate}
            reviews={selectedProduct.review}
          /> */}
          </>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
