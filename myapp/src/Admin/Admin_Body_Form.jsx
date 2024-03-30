import React, { useContext, useState, useEffect } from "react";
import { Context } from "../Context/createContext";
const Admin_Body_Form = () => {
  const { Admin_submit, adminData, handleAdminChange, handleCheckChange } =
    useContext(Context);

  return (
    <div className="Body-Form">
      <form className="Admin-Form" onSubmit={Admin_submit}>
        <label htmlFor="">Image Link</label>
        <input
          type="text"
          name="imgSrc"
          value={adminData.imgSrc}
          onChange={handleAdminChange}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={adminData.title}
          onChange={handleAdminChange}
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          value={adminData.price}
          onChange={handleAdminChange}
        />
        <label htmlFor="review">Review</label>
        <input
          type="text"
          placeholder="- 10 Review"
          name="review"
          value={adminData.review}
          onChange={handleAdminChange}
        />
        <button type="submit">Add </button>

        <div className="Admin-body">
          <input
            type="radio"
            name="options"
            id="option1"
            value={"cardData"}
            onChange={handleCheckChange}
          />
          <label htmlFor="option1">Card Data </label>
          {/* card data */}

          <input
            type="radio"
            name="options"
            id="option2"
            value={"Categories_accessories"}
            onChange={handleCheckChange}
          />
          <label htmlFor="option2">Categories Accessories</label>

          <input
            type="radio"
            name="options"
            id="option3"
            value={"NewProducts_Data"}
            onChange={handleCheckChange}
          />
          <label htmlFor="option3">New Products</label>
          <input
            type="radio"
            name="options"
            id="option4"
            value={"Trending_Products_Data"}
            onChange={handleCheckChange}
          />
          <label htmlFor="option4">Trending Products</label>

          <input
            type="radio"
            name="options"
            id="option5"
            value={"Categories_children"}
            onChange={handleCheckChange}
          />
          <label htmlFor="option5">Categories Children</label>
        </div>
        <label htmlFor="option4">Men Products</label>
              <input
                type="radio"
                name="options"
                id="option5"
                value={"menProducts"}
                onChange={handleCheckChange}
              />
               <label htmlFor="option4">Women Products</label>
              <input
                type="radio"
                name="options"
                id="option5"
                value={"womenProducts"}
                onChange={handleCheckChange}
              />
               <label htmlFor="option4">Kids Products</label>
              <input
                type="radio"
                name="options"
                id="option5"
                value={"kidsProducts"}
                onChange={handleCheckChange}
              />
      </form>
    </div>
  );
};

export default Admin_Body_Form;
