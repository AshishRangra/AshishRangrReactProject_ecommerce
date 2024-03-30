import React, { useContext, useEffect, useState } from "react";
import "../css2/viewContent.css";
import { useLocation } from "react-router-dom";
import { Context } from "../../Context/createContext";
const ViewContent = () => {
  const [display1, setDisplay] = useState("description");
  const { jsonArr, fetchData } = useContext(Context);
  const { addToCart } = useContext(Context);
  const location = useLocation();
  const { product, index } = location.state || {};
  //   console.log("Product is : ", product);
  useEffect(() => {
    fetchData(product);
  }, [fetchData, product]);
  console.log("jsonArr[product]", jsonArr[product]);
  const value = {
    imgSrc: jsonArr[product][index].imgSrc,
    title: jsonArr[product][index].title,
    price: jsonArr[product][index].price,
    review: jsonArr[product][index].review,
  };
  return (
    <div>
      <div className="displayProduct">
        <div className="contentImages">
          <div className="img-container">
            {jsonArr[product] && jsonArr[product].length > 0 && (
              <img
                src={jsonArr[product][index].imgSrc}
                className="smallImagesofProduct"
                alt=""
                height={"100px"}
                width={"100px"}
              />
            )}
          </div>
          <div className="img-container">
            {jsonArr[product] && jsonArr[product].length > 0 && (
              <img
                src={jsonArr[product][index].imgSrc}
                className="smallImagesofProduct"
                alt=""
                height={"100px"}
                width={"100px"}
              />
            )}
          </div>
          <div>
            {jsonArr[product] && jsonArr[product].length > 0 && (
              <img
                src={jsonArr[product][index].imgSrc}
                className="smallImagesofProduct"
                alt=""
                height={"100px"}
                width={"100px"}
              />
            )}
          </div>
          <div className="img-container">
            {jsonArr[product] && jsonArr[product].length > 0 && (
              <img
                src={jsonArr[product][index].imgSrc}
                className="smallImagesofProduct"
                alt=""
                height={"100px"}
                width={"100px"}
              />
            )}
          </div>
        </div>
        <div className="ProductImage">
          {jsonArr[product] && jsonArr[product].length > 0 && (
            <img
              src={jsonArr[product][index].imgSrc}
              alt=""
              height={"500vh"}
              width={"100%"}
            />
          )}
        </div>
        <div className="ProductDetails">
          <div className="ProductTitle">
            {jsonArr[product] && jsonArr[product].length > 0 && (
              <span>{jsonArr[product][index].title}</span>
            )}
          </div>
          <div className="ProductRating">
            {jsonArr[product] && jsonArr[product].length > 0 && (
              <span> ⭐⭐⭐⭐{jsonArr[product][index].review}</span>
            )}
          </div>
          <div className="ProductPrice">
            {jsonArr[product] && jsonArr[product].length > 0 && (
              <span style={{ fontWeight: "bold" }}>
                {jsonArr[product][index].price} 💵
              </span>
            )}
          </div>
          <div className="ProductDescription">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              laboriosam fuga tempore provident assumenda consectetur accusamus,
              molestiae vitae impedit fugit quis rem, quia nesciunt ipsa
              obcaecati doloremque maxime corporis totam?
            </span>
          </div>
          <p style={{ fontWeight: "bold" }}>Select Size</p>
          <div className="Size">
            <button className="ProductSize">S</button>
            <button className="ProductSize">M</button>
            <button className="ProductSize">L</button>
            <button className="ProductSize">XL</button>
            <button className="ProductSize">XLL</button>
          </div>

          <div className="AddToCartProduct">
            <button
              className="card-btn"
              onClick={() => {
                addToCart(value);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="ReviewsAndShare">
        <div className="cartBodyContent">
          <div className="decription">
            <button
              onClick={() => setDisplay("description")}
              className="descriptionBtn"
            >
              Description
            </button>
          </div>
          <div className="reviews">
            <button onClick={() => setDisplay("reviews")} className="reviewBtn">
              Review
            </button>
          </div>
        </div>
        {/* <div className="displayContainer"> */}
        <p
          className="displayContainer"
          style={{ display: display1 === "description" ? "block" : "none" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          temporibus odit architecto cupiditate similique asperiores omnis nulla
          voluptatibus! Excepturi fuga consectetur adipisci optio earum
          repellendus obcaecati omnis, veritatis id mollitia! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nobis temporibus odit
          architecto cupiditate similique asperiores omnis nulla voluptatibus!
          Excepturi fuga consectetur adipisci optio earum repellendus obcaecati
          omnis, veritatis id mollitia! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nobis temporibus odit architecto cupiditate
          similique asperiores omnis nulla voluptatibus! Excepturi fuga
          consectetur adipisci optio earum repellendus obcaecati omnis,
          veritatis id mollitia! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nobis temporibus odit architecto cupiditate
          similique asperiores omnis nulla voluptatibus! Excepturi fuga
          consectetur adipisci optio earum repellendus obcaecati omnis,
          veritatis id mollitia!
        </p>
        <div
          className="displayContainer"
          style={{ display: display1 === "reviews" ? "block" : "none" }}
        >
          <h6 style={{ fontWeight: "bold" }}> Positive Review:</h6>
          <p>
            "This product is exactly what I was looking for! The quality is
            fantastic, and it arrived much faster than expected. I'm very happy
            with my purchase and will definitely recommend it to others." -
            Sarah K., Verified Buyer (5 stars)
          </p>
          <h6 style={{ fontWeight: "bold" }}>Negative Review:</h6>

          <p>
            "Disappointed with this purchase. The instructions were unclear, and
            the product seems cheaply made. It also took a long time to ship. I
            wouldn't recommend this to anyone." - John D., Verified Buyer (1
            star)
          </p>
          <h6 style={{ fontWeight: "bold" }}> Neutral Review:</h6>

          <p>
            "The product itself is okay. It works as advertised, but it's not
            quite as impressive as I thought it would be. The shipping was fast,
            though. I might consider it again if there's a sale." - Emily L.,
            Verified Buyer (3 stars)
          </p>

          <h6 style={{ fontWeight: "bold" }}>
            Review Highlighting Specific Feature:
          </h6>
          <p>
            "This running shoe is amazing! The cushioning is incredible, and it
            feels super lightweight. My feet felt great even after a long run.
            Highly recommend for anyone looking for a comfortable and supportive
            shoe." - Michael B., Verified Buyer (5 stars)
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ViewContent;
