import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/Slice/cartSlice";
import { useGetAllProductsQuery } from "../../../../redux/Slice/productsApi";
import { useNavigate } from "react-router-dom";
const Item = () => {
  AOS.init();
  const { data, error, isLoading } = useGetAllProductsQuery();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState("all");
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleFilterButton = (e) => {
    setFilteredProducts(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <p> Loading....</p>
      ) : error ? (
        <p>An error occured....</p>
      ) : (
        <>
          <section className="filter-container">
            <span className="title">Filter by:</span>
            <div className="filter-content">
              <button
                autoFocus
                onClick={(e) => handleFilterButton(e)}
                value="all"
              >
                VIEW ALL
              </button>
              <button onClick={(e) => handleFilterButton(e)} value="truffle">
                TRUFFLE
              </button>
              <button
                onClick={(e) => handleFilterButton(e)}
                value="salmon skin"
              >
                SALMON SKIN
              </button>
              <button onClick={(e) => handleFilterButton(e)} value="fish skin">
                FISH SKIN
              </button>
              <button
                onClick={(e) => handleFilterButton(e)}
                value="crunchy roll"
              >
                CRUNCHY ROLL
              </button>
              <button
                onClick={(e) => handleFilterButton(e)}
                value="potato chips"
              >
                POTATO CHIPS
              </button>
              <button
                onClick={(e) => handleFilterButton(e)}
                value="cassava chips"
              >
                CASSAVA CHIPS
              </button>
              <button onClick={(e) => handleFilterButton(e)} value="gyoza skin">
                GYOZA SKIN
              </button>
            </div>
          </section>
          <div className="shop-container">
            {data
              .filter((product) => product.category.includes(filteredProducts))
              .map((product) => {
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
                        onClick={() => navigate(`/products/${product.id}`)}
                      >
                        INFOMATION
                      </button>
                    </div>
                    <div className="items-content">
                      <p className="items-content--title">{product.name}</p>
                      <p className="items-content--price">
                        ${Number(product.price).toFixed(2)} SGD
                      </p>
                      <p className="items-content--star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>{product.review_number} reviews</span>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Item;
