import React, { useState, useContext, useEffect } from "react";

import BodyContact from "../Body/body-contact";
import BodyCards from "../Body/BodyCards";
import TrendingProducts from "../Body/TrendingProducts";
import NewProducts from "../Body/NewProducts";
import Categories from "../Body/CategoriesSection";
// import { cardData } from "../dummydata/DummyData";
// import { Trending_Products_Data } from "../dummydata/DummyData";
import { Context } from "../../Context/createContext";

const Body = () => {
  const { fetchData, jsonArr } = useContext(Context);
  const [fetchingData, setFetchingData] = useState(false);
  useEffect(() => {
    if (!fetchingData) {
      setFetchingData(true);
      fetchData("carouselUrl");
      fetchData("cardData");
      fetchData("Trending_Products_Data").then(() => {
        setFetchingData(false);
      });
    }
  }, []);

  return (
    <div>
      <div className="Body">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {jsonArr &&
              jsonArr.carouselUrl.map((item, index) => (
                <div
                  className="carousel-item active"
                  data-bs-interval="1000"
                  key={index}
                >
                  <img src={item.imgSrc} className="carousel-img" alt="..." />
                </div>
              ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <BodyContact />

      <div>
        <h3>Trending Products</h3> <hr />
        <div className="cards-body">
          {jsonArr &&
            jsonArr.cardData.map((item, index) => (
              <div key={index}>
                <BodyCards {...item} index={index} />
              </div>
            ))}
        </div>
      </div>
      <div className="row">
        {jsonArr &&
          jsonArr.Trending_Products_Data.map((item, index) => (
            <div className="col-4" key={index}>
              <TrendingProducts {...item} index={index} />
            </div>
          ))}
      </div>
      <NewProducts />
      <div className="body-carousel"></div>

      <Categories />
      <div className="Boucher">
        <div className="left">
          <h3>SIGNUP AND GET FREE VOUCHER $250 FOR NEWLY</h3>
          <span>
            *Voucher is valid only for new customer on new Registration
          </span>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Enter here...."
            style={{ border: "none", padding: "12px", width: "200px" }}
          />
          <button
            style={{
              border: "1px solid orange",
              color: "white",
              background: "Orange",
              height: "50px",
              width: "150px",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
