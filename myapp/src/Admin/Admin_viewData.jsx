import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/createContext";
import "./css/AdminViewData.css"
const Admin_viewData = () => {
  const {
    jsonArr,
    // Admin_edit_data,
    Admin_Delete_Data,
    fetchData,
  } = useContext(Context);
  const [selectedOption, setSelectedOption] = useState(null);
  console.log("selected option new ", selectedOption);

  const handleCheckChange = (e) => {
    setSelectedOption(e.target.value);
  };
  
  console.log("selected option new ", selectedOption);
  useEffect(() => {
    if (selectedOption !== null) {
      fetchData(selectedOption);
    }
  }, [fetchData, selectedOption]);

  console.log("jsonArr", jsonArr[selectedOption]);

  return (
    <div id="admin-container">
      {/* <h1 id="heading">View Data</h1> */}
      <div>
      <div  id="option-container">
              <input
                type="radio"
                name="options"
                id="option1"
                value={"cardData"}
                onChange={handleCheckChange}
              />
              <label htmlFor="option1">Card Data</label>
              <input
                type="radio"
                name="options"
                id="option2"
                value={"Categories_accessories"}
                onChange={handleCheckChange}
              />
              <label htmlFor="option2">Categories(children)</label>
              <input
                type="radio"
                name="options"
                id="option3"
                value={"NewProducts_Data"}
                onChange={handleCheckChange}
              />
              <label htmlFor="option3">Categories(Accessories)</label>
              <input
                type="radio"
                name="options"
                id="option4"
                value={"Trending_Products_Data"}
                onChange={handleCheckChange}
              />
              <label htmlFor="option4">New Products</label>
              <input
                type="radio"
                name="options"
                id="option5"
                value={"New_Products"}
                onChange={handleCheckChange}
              />

              <label htmlFor="option5">Trending Products</label>
              <br />
              <input
                type="radio"
                name="options"
                id="option5"
                value={"carouselUrl"}
                onChange={handleCheckChange}
              />
          
                 <label htmlFor="option4">Carousel Images</label>
              <input
                type="radio"
                name="options"
                id="option5"
                value={"menProducts"}
                onChange={handleCheckChange}
              />
              <label htmlFor="option4">Men Products</label>
              <input
                type="radio"
                name="options"
                id="option5"
                value={"womenProducts"}
                onChange={handleCheckChange}
              />
                <label htmlFor="option4">Women Products</label>
              <input
                type="radio"
                name="options"
                id="option5"
                value={"kidsProducts"}
                onChange={handleCheckChange}
              /><label htmlFor="option4">Kids Products</label>
            </div>
        <table id="data-table">
          <thead>
            <tr>
              <th>ID</th>
              
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           
            {jsonArr[selectedOption] &&
              jsonArr[selectedOption].map((value, index) => (
                <tr key={index}>
                  <td>{value.id}</td>
                  {/* <td>{value.albumId}</td> */}
                  <td>{value.title}</td>
                  <td>
                    <button
                      onClick={() =>
                        Admin_Delete_Data(selectedOption, value.id)
                      }
                      className="delete-button"
                    >
                      Delete
                    </button>
                    {/* <button
                      onClick={() => Admin_edit_data(value.id, index)}
                      className="update-button"
                    >
                      Update
                    </button> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin_viewData;
