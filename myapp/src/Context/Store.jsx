import React, { useState } from "react";

import { Context } from "./createContext";

const Store = ({ children }) => {
  const [val, setVal] = useState({ search: "" });
  const [arr, setArr] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [ID, setID] = useState(null);
  const handleCheckChange = (e) => {
    setSelectedOption(e.target.value);
  };
  console.log("Selected Option Value is : ", selectedOption);
  const handleChange = (e) => {
    setVal({ ...val, search: e.target.value });
  };
  //   console.log(val);
  // http://localhost:8000/Categories_children
  // http://localhost:8000/Categories_accessories
  // http://localhost:8000/NewProducts_Data
  // http://localhost:8000/ Trending_Products_Data
  // http://localhost:8000/logoUrl
  // http://localhost:8000/carouselUrl
  // http://localhost:8000/register
  const [active, setActive] = useState("");
  const [jsonArr, setJsonArr] = useState({
    cardData: [],
    Categories_children: [],
    Categories_accessories: [],
    carouselUrl: [],
    logoUrl: [],
    Trending_Products_Data: [],
    New_Products: [],
    register: [],
    menProducts: [],
    womenProducts: [],
    kidsProducts: [],
  });
  const [adminData, setAdminData] = useState({
    imgSrc: "",
    title: "",
    price: "",
    review: "",
  });
  const Search = (e) => {
    const searchTerm = e.target.value;
  
    if (searchTerm === "") {
      window.location.href = "/";
      return;
    }
  
    if (jsonArr) {
      let filterCollection = [];
      Object.keys(jsonArr).forEach((key) => {
        if (Array.isArray(jsonArr[key])) {
          const filteredData = jsonArr[key].filter((value) =>
            value.title && value.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredData.length > 0) {
            filterCollection = [...filterCollection, ...filteredData];
          }
        }
      });
      setArr(filterCollection);
    }
  };
  

  const Submit = (e) => {
    e.preventDefault();
  };
  const addToCart = (product) => {
    setCartArr([...cartArr, product]);
  };
  const removeProductFromCart = (index) => {
    let newArr = [...cartArr];
    newArr.splice(index, 1);
    setCartArr(newArr);
  };

  const fetchData = async (str) => {
    await fetch(`http://localhost:8000/${str}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setJsonArr({ ...jsonArr, [str]: data }))
      .catch((error) => console.log(error));
  };
  const handleAdminChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
    console.log("Admin data : ", adminData);
  };

  const Admin_submit = async (e) => {
    e.preventDefault();
    console.log(
      "ENter submit",
      "edit index",
      editIndex,
      "adminData",
      adminData
    );
    if (editIndex === null) {
      if (
        adminData.imgSrc.length > 10 &&
        adminData.title.length > 0 &&
        adminData.price.length > 0 &&
        adminData.review.length > 0
      ) {
        await fetch(`http://localhost:8000/${selectedOption}`, {
          method: "POST",
          body: JSON.stringify(adminData),
          headers: { "Content-Type": "application/json" },
        });
        console.log("successfull");
        setAdminData({
          imgSrc: "",
          title: "",
          price: "",
          review: "",
        });
      }
    } else {
      await fetch(`http://localhost:8000/${selectedOption}/${ID}`, {
        method: "PUT",
        body: JSON.stringify(adminData),
        headers: { "Content-Type": "application/json" },
      });
      // fetchData()
      setEditIndex(null);
    }
  };
  const Admin_Delete_Data = async (str, id) => {
    try {
      await fetch(`http://localhost:8000/${str}/${id}`, {
        method: "DELETE",
      });
      // fetchData()
    } catch (error) {
      console.log(error);
    }
  };
  const Admin_edit_data = (id, index) => {
    setID(id);
    setEditIndex(index);
    setAdminData(jsonArr[index]);
  };

  return (
    <>
      <Context.Provider
        value={{
          handleChange,
          Submit,
          val,
          Search,
          arr,
          active,
          addToCart,
          cartArr,
          removeProductFromCart,
          fetchData,
          jsonArr,
          Admin_submit,
          adminData,
          handleAdminChange,
          Admin_Delete_Data,
          Admin_edit_data,
          handleCheckChange,
          setSelectedOption,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default Store;
