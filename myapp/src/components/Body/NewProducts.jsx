import React, { useState, useContext, useEffect } from "react";
// import { NewProducts_Data } from "../dummydata/DummyData";
import { Context } from "../../Context/createContext";
import { useNavigate } from "react-router-dom";
const NewProducts = () => {
  const { addToCart, jsonArr, fetchData } = useContext(Context);
  const [fetchingData, setFetchingData] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setFetchingData(true);
    fetchData("New_Products").then(() => setFetchingData(false));
  }, [fetchData, fetchingData]);
  return (
    <div>
      <h3>New Products</h3>
      <hr />
      <div className="new-products">
        {jsonArr &&
          jsonArr.New_Products.map((value, index) => (
            <div
              key={index}  id={value.title}
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
                <h6>⭐⭐⭐⭐ {value.reviews}</h6>
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
                        product: "New_Products",
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

export default NewProducts;
