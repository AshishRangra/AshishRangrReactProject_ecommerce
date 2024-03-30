import React, { useContext } from "react";
import { Context } from "../../Context/createContext";

const Cart = () => {
  const { cartArr, removeProductFromCart } = useContext(Context);

  return (
    <div >
      <h1 style={{color:"black"}}>Your Shopping Cart</h1>

      {
        cartArr.map((value, index) => (
        <div
          className="card"
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
            <button className="card-btn">Buy This Now</button>
            <button
              className="card-btn"
              onClick={() => removeProductFromCart(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
