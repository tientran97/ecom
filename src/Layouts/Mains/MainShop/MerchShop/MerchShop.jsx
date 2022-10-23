import React from "react";
import dataMerch from "../../../../data/data.merch";
import AOS from "aos";
import "aos/dist/aos.css";
import './MerchShop.css'
const Merch = () => {
  AOS.init();

  return (
    <section className="merch-container">
      <p className="merch-title" data-aos="fade-up" data-aos-delay="50">
        THE MERCH SHOP
      </p>
      <div className="merch-content">
        {dataMerch.map((item) => {
          return (
            <div
              className="item-container"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="item-background">
                <img
                  className="item-image"
                  src={item.image_url}
                  alt={item.title}
                />
              </div>
              <div className="item-content">
                <p className="items-content--title">{item.title}</p>
                <p className="items-content--price">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Merch;
