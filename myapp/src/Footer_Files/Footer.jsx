import React from 'react';
import './Footer.css'; 
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p style={{textAlign:'justify'}}>
             With a commitment to quality and customer satisfaction, we curate a diverse selection of products to meet your needs and exceed your expectations. 
             Our mission is to provide an exceptional shopping experience, backed by superior products, excellent customer service, and a seamless online platform.
             Welcome to our website, where your satisfaction is our top priority.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="quick-links">
              <li><a href="/">Home</a></li>
              <li><a href="/">Shop</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
          <div className="footer-div"><h4>Registered Office Address:</h4>
          <div><p>Ecommerce Internet Private Limited, </p>
          <p> Buildings Alyssa, Begonia 
            Clove Embassy Tech Village, </p>
           <p> Outer Ring Road, Devarabeesanahalli Village, </p>
           <p> Mohali, 560103,Punjab, India </p><p> CIN : U51109KA2012PTC066107 </p>
           <p></p><p> Telephone: <a href="tel:044-45614700">044-45614700</a></p>
           </div></div>
            
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="social-icons">
              <a href="https://www.facebook.com/"><FacebookIcon/></a>
              <a href="https://twitter.com/i/flow/login"><XIcon/></a>
              <a href="https://www.instagram.com"><InstagramIcon/></a>
              <a href="https://www.linkedin.com/feed/"><LinkedInIcon/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright d-flex justify-content-center" style={{marginTop:"20px",fontWeight:"bold"}}>
        <p>Copyright © 2024 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
