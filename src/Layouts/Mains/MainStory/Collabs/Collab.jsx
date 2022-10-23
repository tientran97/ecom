import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Collab.css'
const Collab = () => {
  AOS.init();

  return (
    <div className="collab-container">
      <div className="collab-title">
        <div>
          <span data-aos="fade-up" data-aos-delay="350">
            BRANDS
          </span>
          <span data-aos="fade-up" data-aos-delay="500">
            COLLABS
          </span>
        </div>
      </div>
      <div className="collab-content">
        <div className="collab-content--item">
          <div className="collab-content--item_image">
            <a
              href="https://cottonon.com/SG/co/collab-shop/collabs-food-drink/irvins/"
              target="_blank"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/story_cotton_on_500x.jpg?v=1637390158"
                alt="item"
              />
              Check it out
            </a>
          </div>

          <span>IRVINS X COTTONON</span>
          <p>
            We partnered with Australia's largest global retailer, Cotton On to
            create this #DangerouslyFashionable line of IRVINS-branded mens and
            womens clothing
          </p>
        </div>
        <div className="collab-content--item">
          <div className="collab-content--item_image">
            <a
              href="https://cottonon.com/SG/co/collab-shop/collabs-food-drink/irvins/"
              target="_blank"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/story_nissin_500x.png?v=1637390173"
                alt="item"
              />
              Check it out
            </a>
          </div>
          <span>IRVINS X NISSIN RAMEN</span>
          <p>
            We collaborated with Nissin, the original creators of instant ramen
            to give you an outrageously delicious ramen bowl: classic mee pok
            noodles mixed with our savory salted egg seasoning
          </p>
        </div>
        <div className="collab-content--item">
          <div className="collab-content--item_image">
            <a
              href="https://cottonon.com/SG/co/collab-shop/collabs-food-drink/irvins/"
              target="_blank"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/story_pezzo_500x.png?v=1637390179"
                alt="item"
              />
              Check it out
            </a>
          </div>
          <span>IRVINS X PEZZO</span>
          <p>Salted Egg sauce + Fish Skin crumbs + pizza = umami explosion</p>
        </div>
      </div>
    </div>
  );
};

export default Collab;
