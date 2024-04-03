import React, { useContext, useEffect, useState } from "react";
import "./Body.css";

import "./css/Categories.css";
import { Context } from "../../Context/createContext";
import { useNavigate } from "react-router-dom";
// import ViewContent from "../cartPages/viewContent";
const Categories = () => {
  const { addToCart, cartArr, fetchData, jsonArr } = useContext(Context);
  const [active, setActive] = useState("accessories");
  // const [showViewContent, setShowViewContent] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const navigate = useNavigate();
  const changeActive = (data) => {
    setActive(data);
  };

  useEffect(() => {
    if (!fetchingData) {
      setFetchingData(true);
      fetchData("Categories_accessories");

      fetchData("Categories_children").then(() => {
        setFetchingData(false);
      });
    }
  }, []);

  console.log("JSON Array is : ", jsonArr);

  return (
    <div style={{ background: "white" }}>
      <div className="Categories1">
        <h3>Categories</h3>
        <span onClick={() => changeActive("kids")}>Kids /</span>
        <span onClick={() => changeActive("accesories")}>Accessories</span>
        {console.log(active)}
      </div>
      <hr />

      <div className="categories">
        {/* Accessories */}
        {active === "accesories" && (
          <div
            className="Categories accesories"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {jsonArr &&
              jsonArr.Categories_accessories.map((value, index) => (
                <div
                  className="card"  id={value.title}
                  style={{ width: "16.5rem", height: "auto" }}
                  key={index}
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
                    <h6>⭐⭐⭐⭐{value.reviews}</h6>

                    <button
                      className="card-btn"
                      onClick={() => {
                        addToCart(value);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      style={{ margin: "10px" }}
                      className="card-btn"
                      onClick={() =>
                        navigate("/displayProduct", {
                          state: {
                            product: "Categories_accessories",
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
        )}
        {console.log(cartArr)}
        {/* ======================================================================================================================================= */}
        {/* Kids */}

        {active === "kids" && (
          <div className="Categories kids" style={{ display: "flex" }}>
            {jsonArr &&
              jsonArr.Categories_children.map((value, index) => (
                <div
                  className="card"  id={value.title}
                  style={{ width: "16.5rem", height: "auto" }}
                  key={index}
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
                    <h6>⭐⭐⭐⭐ {value.reviews}</h6>
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
                            product: "Categories_children",
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
        )}
      </div>
    </div>
  );
};

export default Categories;
