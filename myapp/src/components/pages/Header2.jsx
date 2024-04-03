import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Header2 = () => {
  // const [name1, setName] = useState("Sign In");
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state || { name: "Sign In" };
  console.log("Email : ", name);
  const value = {
    name: name,
  };
  // useEffect(() => {
  //   const { name } = location.state || { name: "Sign In" };
  //   console.log("Email : ", name);
  //   setName(name);
  // }, [location.state]);

  const changeName = () => {
    // setName("Sign In");
    navigate("/");
  };
  console.log("Email : ", name);
  return (
    <div>
      <div className="Header2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <select className="searchItems" name="" id="">
              <option value="SHOP BY Accessories">SHOP BY ACCESSORIES</option>
            </select>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/men">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/women">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/kids">
                    Kids
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div style={{ display: "flex" }}>
            {" "}
            <button
              className="search-btn "
              id="header-btn1"
              onClick={() => navigate("/login")}
            >
              {value.name}
            </button>{" "}
            <button className="search-btn " onClick={() => navigate("/Cart")}>
              My Cart
            </button>
            <button className="search-btn" onClick={() => changeName()}>
              Log Out{" "}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header2;
