import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../../../redux/Slice/cartSlice";
import { useNavigate } from "react-router-dom";
import {
  selectProducts,
  STORE_PRODUCTS,
} from "../../../../redux/Slice/productsSlice";
import useFetchCollection from "../../../../customHooks/useFetchCollection";
import LoadingSpinner from "../../../../components/Loader/LoadingSpinner";
import { FILTER_BY_CATEGORY } from "../../../../redux/Slice/filterSlice";
import { selecteFilterProducts } from "../../../../redux/Slice/filterSlice";

const Item = () => {
  AOS.init();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(ADD_TO_CART(product));
  };

  const { data, isLoading } = useFetchCollection("products");

  const products = useSelector(selectProducts);
  let filteredProducts = useSelector(selecteFilterProducts);

  const url = window.location.href;
  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
    if (url.includes("products")) {
      window.scrollTo({
        top: 550,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [dispatch, data]);

  const allCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  const [category, setCategory] = useState("all");
  const handleFilterButton = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };
  return (
    <>
      <>
        {isLoading && <LoadingSpinner />}
        <section className="filter-container">
          <span className="title">Filter by:</span>
          <div className="filter-content">
            {allCategories.map((category, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleFilterButton(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>
        <div className="shop-container">
          {filteredProducts.length === 0 ? (
            <>
              {isLoading && <LoadingSpinner />}
              {products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="item-container"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    <div
                      className="item-background"
                      style={{
                        backgroundColor: `${product.background_color}`,
                      }}
                    >
                      <img
                        className="item-image"
                        src={product.main_image_url}
                        alt="item"
                      />
                      <button
                        className="button-add"
                        onClick={() => handleAddToCart(product)}
                      >
                        ADD TO CART
                      </button>
                      <button
                        className="button-info"
                        onClick={() =>
                          navigate(`/products-details/${product.id}`)
                        }
                      >
                        INFOMATION
                      </button>
                    </div>
                    <div className="items-content">
                      <p className="items-content--title">{product.name}</p>
                      <p className="items-content--price">
                        ${Number(product.price).toFixed(2)} SGD
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {isLoading && <LoadingSpinner />}

              {filteredProducts.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="item-container"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    <div
                      className="item-background"
                      style={{
                        backgroundColor: `${product.background_color}`,
                      }}
                    >
                      <img
                        className="item-image"
                        src={product.main_image_url}
                        alt="item"
                      />
                      <button
                        className="button-add"
                        onClick={() => handleAddToCart(product)}
                      >
                        ADD TO CART
                      </button>
                      <button
                        className="button-info"
                        onClick={() =>
                          navigate(`/products-details/${product.id}`)
                        }
                      >
                        INFOMATION
                      </button>
                    </div>
                    <div className="items-content">
                      <p className="items-content--title">{product.name}</p>
                      <p className="items-content--price">
                        ${Number(product.price).toFixed(2)} SGD
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </>
    </>
  );
};

export default Item;
