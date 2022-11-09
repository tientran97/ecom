import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Collab.css";
const collabData = [
  {
    id: 1,
    url: "https://cottonon.com/SG/co/collab-shop/collabs-food-drink/irvins/",
    img: "https://cdn.shopify.com/s/files/1/0422/2441/8983/files/story_cotton_on_500x.jpg?v=1637390158",
    name: "IRVINS X COTTONON",
    text: `We partnered with Australia's largest global retailer, Cotton On to
            create this #DangerouslyFashionable line of IRVINS-branded mens and
            womens clothing`,
  },
  {
    id: 2,
    url: "https://cottonon.com/SG/co/collab-shop/collabs-food-drink/irvins/",
    img: "https://cdn.shopify.com/s/files/1/0422/2441/8983/files/story_nissin_500x.png?v=1637390173",
    text: `We collaborated with Nissin, the original creators of instant ramen
            to give you an outrageously delicious ramen bowl: classic mee pok
            noodles mixed with our savory salted egg seasoning`,
    name: "IRVINS X NISSIN RAMEN",
  },
  {
    id: 3,
    url: "https://cottonon.com/SG/co/collab-shop/collabs-food-drink/irvins/",
    img: "https://cdn.shopify.com/s/files/1/0422/2441/8983/files/story_pezzo_500x.png?v=1637390179",
    name: "IRVINS X PEZZO",
    text: `Salted Egg sauce + Fish Skin crumbs + pizza = umami explosion`,
  },
];
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
      <div className="collab-content"
        // data-aos="fade-up" data-aos-delay="300"
      >
        {collabData.map((item) => {
          return (
            <div key={item.id} className="collab-content--item">
              <div className="collab-content--item_image">
                <a href={item.url} target="_blank">
                  <img src={item.img} alt="item" />
                </a>
              </div>

              <span>{item.name}</span>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collab;
