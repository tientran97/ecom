import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MainFindUs.css";
const Findus = () => {
  AOS.init();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <div className="singapore-container">
        <div
          className="singapore-title"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          FIND US - SINGAPORE
        </div>
        <div className="singapore-container--content">
          <div
            className="singapore-item"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <div className="singapore-item--title">CHANGI AIRPORT T1</div>
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/1_1440x.png?v=1642138277"
              alt="place"
            />
            <div className="singapore-item--text">
              <span>Opens Daily: 6AM - 11:30PM</span>
              <p>
                Airside, departure / transit lounge west,
                <br /> 02-k07 (Opposite Paul bakery)
              </p>
            </div>
          </div>
          <div
            className="singapore-item"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
          >
            <div className="singapore-item--title">CHANGI AIRPORT T3</div>
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/8_1_1440x.png?v=1649401133"
              alt="place"
            />
            <div className="singapore-item--text">
              <span>Opens Daily: 6:30AM - 5:30PM</span>
              <p>
                Changi Airport Terminal 3, #02-43A
                <br /> (Inside WH Smith, near central transit area)
              </p>
            </div>
          </div>
          <div
            className="singapore-item"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
          >
            <div className="singapore-item--title">JEWEL CHANGI AIRPORT</div>
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/2-min_1440x.png?v=1642138333"
              alt="place"
            />
            <div className="singapore-item--text">
              <span>Opens Daily: 10AM - 10PM</span>
              <p>
                B2-248/249/250
                <br /> (Opposite Burger King)
              </p>
            </div>
          </div>
          <div
            className="singapore-item"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <div className="singapore-item--title">ORCHARD GATEWAY</div>
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/4-min_1440x.png?v=1642138367"
              alt="place"
            />
            <div className="singapore-item--text">
              <span>Opens Daily: 11AM - 9:30PM</span>
              <p>L1-K3 (Opposite 6ixty8ight)</p>
            </div>
          </div>
          <div
            className="singapore-item"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
          >
            <div className="singapore-item--title">TAKASHIMAYA</div>
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/5-min_1440x.png?v=1642138385"
              alt="place"
            />
            <div className="singapore-item--text">
              <span>Opens Daily: 10AM - 9:30PM</span>
              <p>
                Area No. B207-2-3
                <br />
                (Near Cold Storage and Food Court)
              </p>
            </div>
          </div>
          <div
            className="singapore-item"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
          >
            <div className="singapore-item--title">WESTGATE</div>
            <img
              src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/6-min_1440x.png?v=1642138400"
              alt="place"
            />
            <div className="singapore-item--text">
              <span>Opens Daily: 10:30AM - 9PM</span>
              <p>L2-K3 (Opposite Laneige)</p>
            </div>
          </div>
        </div>
        <img
          data-aos="zoom-out"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
          className="retail"
          src="https://cdn.shopify.com/s/files/1/0422/2441/8983/files/Other_Retailers_desktop_1800x.png?v=1642764964"
          alt="retail"
        />
      </div>
    </>
  );
};

export default Findus;
