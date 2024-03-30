import React, { useContext } from "react";
import { Context } from "../../Context/createContext";
import { useNavigate } from "react-router-dom";

const BodyCards = ({ imgSrc, title, price, review,index }) => {
  const { addToCart } = useContext(Context);
  const navigate = useNavigate();
  const value = {
    imgSrc: imgSrc,
    title: title,
    price: price,
    review: review,
  };
  return (
    <div className="cards-body">
      <div className="card" style={{ width: "18rem", height: "auto" }}>
        <img src={imgSrc} className="card-img-top" height={"200px"} alt="..." />
        <div className="card-body" id={title}>
          <h5 className="card-title">{title}</h5>
          <h3 className="card-text">{price}</h3>
          <h6>⭐⭐⭐⭐ - {review} Reviews</h6>
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
                  product:"cardData",
                  index: index,
                },
              })
            }
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyCards;
