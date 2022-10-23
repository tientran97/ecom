import React, { useEffect } from "react";
import "./index.css";
const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="term-container">
      <p className="term-heading">TERMS AND CONDITIONS</p>
      <ol className="term-content">
        <li className="term-title">General Terms and Conditions</li>
        <ol className="nested">
          <li className="term-text">
            We are COCOBA PTE LTD ("we" or "the company") and we own and operate
            the site irvinsaltedegg.com ("our site"). Our site offers a
            convenient way to shop for IRVINS Salted Egg products online,
            including by using our applications (where relevant) and also offers
            delivery services by our outsourced logistic partners (collectively
            referred to as "services").
          </li>
        </ol>
        <li className="term-title">Registration</li>
        <ol className="nested">
          <li className="term-text">
            You are required to register with us when you place an order. By
            registering you are making a statement, upon which we are entitled
            to rely, that you are aged 18 years or above and capable of forming
            a legally binding contract, or have so obtained consent from your
            parent(s) or legal guardian(s).
          </li>
          <li className="term-text">
            Where you are required to register, you must: <br />
            (i) provide us with accurate, complete and updated registration
            information;
            <br /> (ii) safeguard your username and password; and
            <br /> (iii) authorize us to assume that any person using our site
            with your username and password is either you or is authorized to
            act for you.
          </li>
          <li className="term-text">
            You must inform us immediately of any changes to the information
            that you provided so that we can communicate with you effectively.
          </li>
        </ol>

        <li className="term-title">Order</li>
        <ol className="nested">
          <li className="term-text">
            All products and services on our site are listed in Singapore
            Dollars.
          </li>
          <li className="term-text">
            Kindly ensure that you have selected the correct product(s) in the
            correct quantity/size (where applicable) before checking out. We
            will not be able to amend orders once they have been confirmed and
            will not be held liable in the event the wrong products are
            selected, or if duplicate orders are placed.
          </li>
          <li className="term-text">
            System will generate an email to the email address you have
            registered to confirm that we have received your order. Such
            confirmation does not constitute a promise of delivery of order
            items.
          </li>
          <li className="term-text">
            We reserve our right not to accept or cancel an order for any
            reasons at our sole discretion, including without limitation:
          </li>
        </ol>
        <li className="term-title">Payment</li>
        <ol className="nested">
          <li className="term-text">
            The company accepts VISA and MasterCard which will be charged in
            Singapore dollars.
          </li>
          <li className="term-text">
            We use third party payment services to process online transactions.
            When you place an order, you agree and accept that your credit card
            information will be collected, processed, and kept by a third-party
            payment service provider subject to its terms and conditions. You
            agree and accept that you are solely and exclusively responsible for
            any losses incurred or sustained by you in making any credit card
            transaction, and in no event shall any such losses in whole or in
            part be borne by us.
          </li>
          <li className="term-text">
            We do not collect or keep your credit card information.
          </li>
          <li className="term-text">
            If the order is cancelled by us for any reason, if you have already
            made any payment, refund will be arranged to your credit card
            account within 30 days after cancellation.
          </li>
          <li className="term-text">
            The company reserves the right to change the payment terms for any
            order without prior notice.
          </li>
        </ol>
        <li className="term-title">Delivery</li>
        <ol className="nested">
          <li>General</li>
          <ol>
            <li>
              We will deliver the products ordered by you to the delivery
              address you give us at the time you place your order through our
              staff or a third-party delivery service provider. Kindly ensure
              that full and correct address is provided. Orders with
              incomplete/incorrect information may result in delayed delivery.
              If you have instructed us/third-party provider to leave your
              delivery outside the door or at the concourse any missing delivery
              under such circumstances shall be at your own risk. You agree and
              accept that we are entitled, at our option, to charge you
              additional costs or cancel your order in the event of your failure
              to accept delivery for whatever reason.
            </li>
            <li>
              All risks in the product(s) shall pass to you upon delivery but we
              shall retain title in the products until full payment has been
              received. From the time when risk passes to you, we will not be
              liable for any loss or damage to the product(s).
            </li>
          </ol>
          <li>Within Singapore</li>
          <ol>
            <li>We currently do not make deliveries to the following areas:</li>
            <ol>
              <li>Outlying islands; and</li>
              <li>Restricted districts and areas that vans cannot access.</li>
            </ol>
            <li>
              Where there is any weather condition in which delivery is
              considered unsafe, delivery services may be delayed. In such
              event, you can check directly with our Customer Support to
              reschedule delivery.
            </li>
          </ol>
          <li>International Delivery</li>
          <ol>
            <li>
              We currently offer international delivery to the locations listed
              here.
            </li>
            <li>
              All orders are subject to customs and duty taxes and charges of
              the respective destination country, payable by the recipient of
              the order. We shall not in any event be liable for any unpaid
              customs and duty taxes and charges or any consequences thereof.
            </li>
          </ol>
        </ol>
        <li className="term-title">Refund & Replacement</li>
        <ol className="nested">
          <li>
            Requests for refunds and/or exchanges will not be entertained except
            in the limited instances specified in our Refund / Exchange Policy.
            You may refer to our Refund / Exchange Policy here.
          </li>
        </ol>
        <li className="term-title">
          Circumstances Beyond Our Control (Force Majeure)
        </li>
        <ol className="nested">
          <li>
            We shall not be liable to you for any breach, hindrance or delay in
            the performance of our obligations relating to the services we
            supply on our site attributable to any cause beyond our reasonable
            control, which shall include prevention occasioned by fire,
            casualty, accident, act of God, natural disaster, any law, order,
            proclamation, regulation, demand or requirement of any government or
            government agencies, strikes, labour disputes, shortage of labour or
            lack of skilled labour, shortage or unavailability of products or
            raw materials, delay in transit or other causes whatsoever (whether
            similar to the foregoing or not) (each a Force Majeure event).
          </li>
          <li>
            In the circumstance that the Force Majeure event lasts for more than
            one week, we reserve the right to cancel your order by written
            notice to you and without any liability other than a refund of the
            product(s) already paid for by you and not delivered.
          </li>
          <li>
            If we have accepted orders of the same product(s) from more than one
            customer and are prevented by from meeting our obligations to all
            customers by reason of a Force Majeure event, we may decide in our
            solve and absolute discretion which orders we will fulfil and to
            that extent.
          </li>
        </ol>
        <li className="term-title">Disclaimer</li>
        <ol className="nested">
          <li>
            The company and its employees, contractors and any third-party
            provider (collectively "IRVINS Salted Egg") make no representation
            or warranty:
          </li>
          <ol>
            <li>
              in relation to the completeness, quality, operation, use,
              accuracy, or timeliness of, or the fitness or use for any purpose
              of, our site or the information (the “Information”) stored on or
              receivable through our site or any related server;
            </li>
            <li>
              in relation to any products or services accessed, offered or
              obtained through our site or pursuant to the Information;
            </li>
            <li>
              that access to our site or the Information will be uninterrupted
              or does not contain any viruses, or contaminating or destructive
              properties.
            </li>
          </ol>
          <li>
            You shall not rely on the Information. We shall not be liable for
            any damages, loss, costs or expenses arises, directly or indirectly,
            from your reliance or use (whether authorized or not) of the
            Information or our site.
          </li>
        </ol>
        <li className="term-title">Linked Websites</li>
        <ol className="nested">
          <li>
            Certain links, including hypertext links, in our site will take you
            outside our site. Links are provided for your convenience and
            inclusion of any link does not imply endorsement or approval by us
            of the linked site, its operator or its content. We are not
            responsible for the content of any website outside our site.
          </li>
        </ol>
        <li className="term-title">Intellectual Property</li>
        <ol className="nested">
          <li>
            The Company is the owner or the licensee of all intellectual
            property rights in and to the content on our site, and in the
            material published on it. You may not copy, reproduce, modify,
            republish, upload, post, transmit, adapt, download, distribute or
            howsoever deal with any content or material (in whole or in part)
            from our site in any form or by any means without our prior written
            permission.
          </li>
          <li>
            In addition, logos, graphics, scripts, and service names included in
            or made available through the Site are trademarks of the Company in
            Singapore and other countries. Our trademarks may not be used in
            connection with any product or service that is not provided by us,
            in any manner that is likely to cause confusion among customers, or
            in any manner that disparages or discredits our company. You must
            not use any part of the content on our site for commercial purposes
            without obtaining a license to do so from us or our licensors. All
            other trademarks not owned by the Company that appear on our site
            are the property of their respective owners.
          </li>
          <li>
            In the event we become aware of any infringement of our intellectual
            property rights, we shall not refrain from taking any relevant legal
            action.
          </li>
        </ol>
        <li className="term-title">Indemnity</li>
        <ol className="nested">
          <li>
            You agree to defend, indemnify, and hold harmless, the company, its
            officers, directors, employees, agents and affiliates, from and
            against any claims, actions, demands, liability, damages and/or
            costs (including without limitation legal fees), arising from your
            use of our site or the content or your breach of these Terms and
            Conditions .
          </li>
        </ol>
        <li className="term-title">Overall</li>
        <ol className="nested">
          <li>
            We reserve the right to withdraw any products from our site at any
            time and/or to remove or edit any materials or content on our site.
          </li>
          <li>
            We further reserve the right to amend these terms and conditions at
            any time without prior notice by updating this page. The revised
            terms will take effect when they are posted. Continued use of our
            site will be deemed to constitute acceptance of the Terms and
            Conditions as may be amended from time to time.
          </li>
          <li>
            In using our services, you agree that we may collect, store, and use
            information about you in accordance with our Privacy Policy, which
            forms a part of these Terms and Conditions.
          </li>
          <li>
            We reserve the right at our sole discretion to deny users access to
            our site or any part of our site without notice and to decline to
            provide our services to any user that is in breach of these terms
            and conditions.
          </li>
          <li>
            You shall not assign or otherwise deal with your rights and
            obligations under these Terms and Conditions, whether in whole or in
            part without our written consent.
          </li>
          <li>
            These Terms and Conditions apply to all use of our site, and
            constitute the entire agreement between you and us and supersede all
            prior agreements, understandings or arrangements relating to the
            subject matter of these Terms and Conditions. You acknowledge that,
            in accepting these Terms and Conditions, you have not relied on any
            representation, undertaking or promise given by us or implied from
            anything said or written between you and us prior to such Terms and
            Conditions.
          </li>
          <li>
            If any clause in these Terms and Conditions or part thereof shall be
            found by any court of competent jurisdiction to be invalid or
            unenforceable, such invalidity or unenforceability shall in no way
            affect any other clause or other part of such clause, all of which
            shall remain in full force and effect, so long as these Terms and
            Conditions shall be capable of continuing in effect without the
            invalid or unenforceable clause or part thereof.
          </li>
          <li>
            No person who is not a party to these Terms and Conditions shall
            acquire any rights under it or be entitled to benefit from any of
            its terms even if that person has relied on any such term or has
            indicated to any party to these Terms and Conditions or that
            Contract its assent to any such term.
          </li>
          <li>
            These Terms and Conditions shall be governed and construed in
            accordance with the laws in force in Singapore. Parties hereby agree
            to submit to the non-exclusive jurisdiction of Singapore courts.
          </li>
        </ol>
      </ol>
    </div>
  );
};

export default Terms;
