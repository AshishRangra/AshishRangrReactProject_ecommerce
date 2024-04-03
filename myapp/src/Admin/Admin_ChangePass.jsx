import React, { useContext, useState } from "react";
import { Context } from "../Context/createContext";
import "./css/AdminViewData.css"
const Admin_ChangePass = () => {
  // const navigate = useNavigate();
  const { jsonArr, fetchData } = useContext(Context);
  const [changedData, setChangedData] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleInputChange = (e) => {
    setChangedData({ ...changedData, [e.target.name]: e.target.value });
  };
  const ChangedData = async () => {
    fetchData("register");

    const ID = jsonArr.register.filter(
      (item) => item.email === changedData.email
    );
    if (ID.length===0) {
    
      console.error("User not found with the provided email.");
   
      return ;
    }
    else{
    console.log("ID is ", ID[0].id);
    const docx = {
      email: ID[0].email,
      securityQuestion: ID[0].securityQuestion,
      answer: ID[0].answer,
      password: changedData.password,
      confirmPass: changedData.confirmPass,
    };
    if (
      changedData.password === changedData.confirmPass &&
      changedData.password.length >= 8
    ) {
      // let id = "8cea";
      await fetch(`http://localhost:8000/register/${ID[0].id}`, {
        method: "PUT",
        body: JSON.stringify(docx),
        headers: { "Content-Type": "application/json" },
      });
      alert("Password Changed Successfully");
    
      // navigate("/login");
    }}  setChangedData({
      email: "",
      password: "",
      confirmPass: "",
    })
  };
  return (
    <div id="container">
    
      <div id="form-group">
        <label htmlFor="staticEmail" className="">
          Email
        </label>{" "}
        <input
          type="text"
          className=""
          id="staticEmail"
          onChange={handleInputChange}
          name="email"
          placeholder="Enter Your Email"
        />
        <label for="inputPassword" className="">
          Password
        </label>
        <input
          type="password"
          className=""
          name="password"
          id="inputPassword"
          onChange={handleInputChange}
          placeholder="Enter Your Passowrd"
        />
        <label for="inputPassword" className="">
          Confirm Password
        </label>
        <input
          type="password"
          className=""
          name="confirmPass"
          id="inputPassword"
          onChange={handleInputChange}
          placeholder="Re-enter your Password"
        />
      </div>
      <div className="d-grid gap-1 col-3 mx-auto">
        <button id="change-button" onClick={ChangedData}>
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Admin_ChangePass;
