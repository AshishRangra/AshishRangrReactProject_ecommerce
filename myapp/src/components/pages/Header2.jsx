import React from "react";
import { useNavigate } from "react-router-dom";
const Header2 = () => {
  const navigate = useNavigate();
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
              Sign In
            </button>{" "}
            <button
              className="search-btn "
              id="header-btn2"
              onClick={() => navigate("/Cart")}
            >
              My Cart
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header2;
