import React from 'react'
import { ReactComponent as Chili } from "../../../../images/noun_Chili_3057434.svg";
import { ReactComponent as Egg } from "../../../../images/noun_Egg_1775207.svg";
import { ReactComponent as Potato } from "../../../../images/noun_Potato Chips_3846037.svg";
import { ReactComponent as Leaves } from "../../../../images/noun_leaves_1840727.svg";
import Character from "../../../../images/IrvinsCharacter.png";
import { ReactComponent as Character2 } from "../../../../images/Group 20.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import './Ingredient.css'
const Ingredient = () => {
  AOS.init();

  return (
    <div className="story-wrapper">
      <div className="story-ingredients">
        <div
          className="story-ingredients--item story-ingredients--item1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Chili />
          <span>WHOLE FOOD INGREDIENTS</span>
          <p>
            Hand-selected ingredients like curry leaves, chili peppers, and
            upcycled salmon skin
          </p>
        </div>
        <div
          className="story-ingredients--item story-ingredients--item2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Egg />
          <span>REAL DUCK EGG YOLK </span>
          <p>
            Salt-brined for 30 days and steamed into a savory crumble (no
            powders here!)
          </p>
        </div>
        <div
          className="story-ingredients--item story-ingredients--item3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Potato />
          <span>CRAFTED IN SMALL BATCHES</span>
          <p>Our explosive umami flavor is carefully baked into every bite</p>
        </div>
        <div
          className="story-ingredients--item story-ingredients--item4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Leaves />
          <span>NO WHEAT FLOUR</span>
          <p>100% natural crunch - no binders or flours</p>
        </div>

        <div className="story-ingredients--item_character1">
          <img src={Character} alt="character" />
        </div>
        <div className="story-ingredients--item_character2">
          <Character2 />
        </div>
      </div>
    </div>
  );
}

export default Ingredient