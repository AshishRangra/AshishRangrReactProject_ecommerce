import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/createContext";
import { useNavigate } from "react-router-dom";
import Header2 from "../pages/Header2";
import Header from "../pages/Header";
const WomenProducts = () => {
  const { addToCart, jsonArr, fetchData } = useContext(Context);
  useEffect(() => {
    fetchData("womenProducts");
  }, []);
  const navigate = useNavigate();
  return (
    <div>
    <Header/>
        <Header2 />
      <div>WomenProducts</div>
      <hr />
      <div
        className="women-products"
        style={{
          display: "flex",
          width: "auto",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {jsonArr &&
          jsonArr.womenProducts.map((value, index) => (
            <div id={value.title}
              key={index}
              className="card"
              style={{ width: "17rem", height: "auto" }}
            >
              <img
                src={value.imgSrc}
                className="card-img-top"
                height={"300px"}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">{value.title}</h6>
                <p className="card-text">{value.price}</p>
                <h6>⭐⭐⭐⭐ {value.review}</h6>
                <button
                  className="card-btn"
                  onClick={() => {
                    addToCart(value);
                  }}
                >
                  {" "}
                  Add to Cart
                </button>
                <button
                  style={{ margin: "10px" }}
                  className="card-btn"
                  onClick={() =>
                    navigate("/displayProduct", {
                      state: {
                        product: "womenProducts",
                        index: index,
                      },
                    })
                  }
                >
                  View
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WomenProducts;
