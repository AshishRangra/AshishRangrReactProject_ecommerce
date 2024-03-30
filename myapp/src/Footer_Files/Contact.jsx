import React from "react";
import "./Contact.css"
const Contact = () => {
  return <div>
  <div className="contact-header">
  <img src="https://media.istockphoto.com/id/1453165336/photo/contact-us-message-on-cube-blocks-on-wood-table.webp?b=1&s=170667a&w=0&k=20&c=GKx_g65-OYapZ5Z0FPxz_VxVyNQBYJgYZbH7Hp7zupQ="
   alt="" className="contact-img"  /></div>
    <div className="contact">
        <div className="contact-body-left">
        <ul>
            <li><h4>Customer Service Hours:</h4><span>Available 24/7</span></li>
            <li><h4>Phone:</h4><span>Call us anytime at +1 (123) 456-7890 to speak with one of our representatives.</span></li>
          
        </ul>
        <p>We value your feedback and strive to provide the best possible customer experience, no matter the time of day. Don't hesitate to reach out to us with any questions or feedback you may have. We're here for you 24/7!</p>
        </div>
        <div className="contact-body-right">
        <h2 style={{textAlign:"center",fontStyle:"italic",fontWeight:"bold"}}>vdxd</h2>
        <img src="https://wallpapers.com/images/hd/blue-contact-us-button-16hluyhgxiu4l1dh.jpg" width={"250px"} height={"250px"} alt="" />
     
        <a href="mailto:ashishrangra45@gmail.com" className="contact-btn">Send us an email</a>

        </div>
    </div>
  </div>;
};

export default Contact;
