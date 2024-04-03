import React, { useContext } from "react";
import "./css/AdminViewData.css"
import { Context } from "../Context/createContext";
const Admin_Body_Form = () => {
  const { Admin_submit, adminData, handleAdminChange, handleCheckChange } =
    useContext(Context);

    return (
      <div id="Body-Form">
       <div>
       <form id="Admin-Form" onSubmit={Admin_submit}>
       
       <div id="option-container">
            <input
              type="radio"
              name="options"
             
              value={"cardData"}
              onChange={handleCheckChange}
            />
            <label htmlFor="option1">Card Data </label>
  
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
            <br />
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
            <input
              type="radio"
              name="options"
              id="option5"
              value={"menProducts"}
              onChange={handleCheckChange}
            />
            <label htmlFor="option5">Men's Product</label>
            <input
              type="radio"
              name="options"
              id="option5"
              value={"womenProducts"}
              onChange={handleCheckChange}
            />
            <label htmlFor="option5">Women's Product</label>
            <input
              type="radio"
              name="options"
              id="option5"
              value={"kidsProducts"}
              onChange={handleCheckChange}
            />
            <label htmlFor="option5">Kids Product</label>
          </div>
          <label htmlFor="imgSrc">Image Link</label>
          <input
            type="text"
          
            name="imgSrc"
            value={adminData.imgSrc}
            onChange={handleAdminChange}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
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
          <button className="Submitbutton2" type="submit">Add</button>
  
        </form>
       </div>
      </div>
    );
  };
  
  export default Admin_Body_Form;