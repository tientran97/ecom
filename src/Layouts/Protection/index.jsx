import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Protection = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <div className="container">
        <p className="heading">
          OFFICIAL STATEMENT ON COUNTERFEIT IRVINS GOODS IN THE MARKET
        </p>
        <p>
          We have learned that some unethical operators have been producing and
          selling counterfeit IRVINS products on various e-commerce platforms
          and falsely claiming to be selling genuine IRVINS products.
        </p>
        <p>We hereby clarify the following:</p>
        <p className="section">
          1. The Official IRVINS sales channel in Mainland China
        </p>
        <p>
          As of 26th April 2022, the IRVINS overseas flagship store in Tmall
          Global has been closed. Currently there are no authorized marketplace
          or store selling our products within Mainland China. Do take
          precaution from buying from businesses and individuals who advertise
          listings of IRVINS products. Please purchase our products locally from
          <Link to="/">("https://eatirvins.sg"),</Link>, or for International
          Orders please purchase from
          <a href="https://eatirvins.world">("https://eatirvins.world")</a> to
          avoid any counterfeits.
        </p>
        <p className="section">
          2. All our products are manufactured in Singapore
        </p>
        <p>
          All genuine IRVINS products sold worldwide are only produced in
          Singapore. We have not authorized any manufacturer in any other
          country to produce our products. These products may also fail to meet
          the relevant food safety regulations.
        </p>
        <p className="section">3. Registered Trademarks</p>
        <p>
          “IRVINS Salted Egg” and “IRVINS” are registered trademarks of our
          company, and any product which uses these two trademarks without our
          authorization is a counterfeit product.
        </p>
        <p>
          “IRVINS Salted Egg” is the brand name of our company in the old
          packaging prior to our rebranding to “IRVINS”. Since 2021, our company
          has carried out the rebranding and has since changed all the brand
          names on the product packaging to be “IRVINS”. If you find that the
          production date is after 2022 but with the brand name as “IRVINS
          Salted Egg”, the product is a counterfeit.
        </p>
        <p className="section">
          4. It is our company's long-standing mission to crack down on
          counterfeits and strive to provide our consumers with high-quality
          products and services.
        </p>
        <p>
          We would like to encourage our consumers to join us to combat
          counterfeits by reporting known or suspected counterfeits to us by
          sending us an email (“sg@eatirvins.com”) and we will not hesitate to
          take further legal actions against such counterfeiters.
        </p>
        <p>Cocoba Pte Ltd</p>
        <p>9 June 2022</p>
      </div>
    </>
  );
};

export default Protection;
