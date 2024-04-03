import React, { useState } from "react";
import "./Admin.css";
import Admin_ChangePass from "./Admin_ChangePass";

import Admin_Body_Form from "./Admin_Body_Form";

import Admin_Logo from "./Admin_Logo";
import Admin_carousel from "./Admin_carousel";
import Admin_viewData from "./Admin_viewData";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState();
  const [active, setActive] = useState(true);
  const handleClick = (link) => {
    setActiveLink(link);
  };

  const [auth, setAuth] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const checkUser = (e) => {
    e.preventDefault();
    if (loginData.email === "Admin" && loginData.password === "12345") {
      setAuth(true);
      setActive(false);
    } else {
      setAuth(false);
    }
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {active && (
        <form onSubmit={checkUser}>
          <div className="mb-3 row">
            <label
              for="staticEmail"
              className="col-sm-2 col-form-label text-light"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="email"
                className="form-control"
                id="staticEmail"
                onChange={handleLoginChange}
                value={loginData.email}
                placeholder="Enter Your Email"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label
              for="inputPassword"
              className="col-sm-2 col-form-label text-light"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputPassword"
                onChange={handleLoginChange}
                value={loginData.password}
                placeholder="Enter Your Passowrd"
              />
            </div>
          </div>
          <div className="d-grid gap-1 col-3 mx-auto">
            <button className="btn btn-success" type="submit">
              Login
            </button>
          </div>
        </form>
      )}
      {auth && (
        <div className="Admin">
          <h1 className="AdminTop">Admin</h1>
          <div className="adminNavbar">
            <div className="AdminLeft">
              <div className="adminLinks">
                <button onClick={() => handleClick("forgot")}>
                  Change Password
                </button>
                <button onClick={() => handleClick("carousel")}>
                  Carousel
                </button>
                <button onClick={() => handleClick("logo")}>Logo</button>
                <button onClick={() => handleClick("body_cards")}>
                  Body Cards
                </button>
                <button onClick={() => handleClick("view_Data")}>
                  View Data
                </button>
              </div>
            </div>
            <div className="AdminRight">
              {activeLink === "forgot" && <Admin_ChangePass />}
              {activeLink === "carousel" && <Admin_carousel />}
              {activeLink === "logo" && <Admin_Logo />}
              {activeLink === "body_cards" && <Admin_Body_Form />}
              {activeLink === "view_Data" && <Admin_viewData />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
