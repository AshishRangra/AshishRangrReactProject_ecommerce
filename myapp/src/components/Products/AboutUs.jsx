import React from "react";

import "../css2/AboutUS.css"; 

const AboutUs = () => {
  return (
    <div className="container">
      <div className="content">
      <div className="imageContainer">
        <img src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg" alt="About Us" className="image" />
      </div>
        <p>
          Welcome to our e-commerce store! We are dedicated to providing our
          customers with the best shopping experience possible. Our team is
          passionate about offering a wide range of high-quality products for
          men, women, and kids.
        </p>
        <p>
          At our store, you'll find everything from clothing and accessories
          to toys and electronics. We carefully curate our selection to ensure
          that we offer only the best products from top brands.
        </p>
        <p>
          Customer satisfaction is our top priority. We strive to provide
          excellent customer service and support to help you with any
          questions or concerns you may have. Your feedback is valuable to us,
          and we are always looking for ways to improve.
        </p>
        <p>
          Thank you for choosing our store for your shopping needs. We look
          forward to serving you and providing you with a fantastic shopping
          experience!
        </p>
      </div>
   
    </div>
  );
};

export default AboutUs;
