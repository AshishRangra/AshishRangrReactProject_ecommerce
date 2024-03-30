import React, { useState } from "react";
import "./Admin.css";
import Admin_ChangePass from "./Admin_ChangePass";

import Admin_Body_Form from "./Admin_Body_Form";

import Admin_Logo from "./Admin_Logo";
import Admin_carousel from "./Admin_carousel";
import Admin_viewData from "./Admin_viewData";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState();

  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="Admin">
      <h1 style={{ color: "black" }}>Admin Panel</h1>
      <div className="adminNavbar">
        <div className="adminLinks">
          {/* <button onClick={() => handleClick("register")}>Register</button> */}
          <button onClick={() => handleClick("forgot")}>Change Password</button>
          <button onClick={() => handleClick("carousel")}>Carousel</button>
          <button onClick={() => handleClick("logo")}>Logo</button>
          <button onClick={() => handleClick("body_cards")}>Body Cards</button>
          <button onClick={() => handleClick("view_Data")}>View Data</button>
        </div>
        <div>
         
          {/* {activeLink === "register" && <AdminRegister />} */}
          {activeLink === "forgot" && <Admin_ChangePass />}
          {activeLink === "carousel" && <Admin_carousel />}
          {activeLink === "logo" && <Admin_Logo />}
          {activeLink === "body_cards" && <Admin_Body_Form />}
          {activeLink === "view_Data" && <Admin_viewData />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
