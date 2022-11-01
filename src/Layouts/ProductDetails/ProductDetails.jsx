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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ProductDetails = () => {
  AOS.init();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(ADD_TO_CART(product));
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getSingleProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Product  data:", docSnap.data());
      const obj = {
        id: id,
        ...docSnap.data(),
      };
      setProduct(obj);
    } else {
      toast.error("No such product!");
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

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
                <img
                  data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="250"
                  src={product.side_image_left}
                  alt=""
                  className="side-image-left"
                />
                <img
                  data-aos="fade-left"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="350"
                  src={product.side_image_right}
                  alt=""
                  className="side-image-right"
                />

                <Accordion
                  title={product.accordion_title_1}
                  ingredients_text={product.ingredient_text}
                  allergens={product.ellergens_text}
                  ingredients_1_image={product.ingredient_image_url_1}
                  ingredients_2_image={product.ingredient_image_url_2}
                  ingredients_3_image={product.ingredient_image_url_3}
                  ingredients_4_image={product.ingredient_image_url_4}
                  small_title_1={product.small_title_1}
                  small_title_2={product.small_title_2}
                />
                <Accordion
                  title={product.accordion_title_2}
                  small_title_2={product.small_title_3}
                  ingredients_text={product.product_info}
                  allergens={product.nutrition}
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
                    className="main-image"
                    src={product.sub_image_url}
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
