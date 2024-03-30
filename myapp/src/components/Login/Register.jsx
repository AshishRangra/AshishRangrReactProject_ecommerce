import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { Context } from "../../Context/createContext";
const Register = () => {
  const { fetchData, jsonArr } = useContext(Context);
  const [RegisteredData, setRegisteredData] = useState({
    email: "",
    password: "",
    confirmPass: "",
    securityQuestion: "",
    answer: "",
  });
  // const [RegisterArr, setRegisterArr] = useState([]);
  const navigate = useNavigate();
  const registerHandleChange = (e) => {
    setRegisteredData({ ...RegisteredData, [e.target.name]: e.target.value });
    // console.log(RegisteredData);
  };

  useEffect(() => {
    fetchData("register");
  }, []);
  const RegisterSubmit = async (e) => {
    e.preventDefault();
    // console.log("Json Array is: ",jsonArr.register)
    const prevCheckData = jsonArr.register.filter((value) => {
      return value.email === RegisteredData.email;
    });
    console.log("Previus data is : ", prevCheckData);
    console.log("Previus data is : ", prevCheckData.length);
    if (prevCheckData.length === 0) {
      console.log(1);
      if (
        RegisteredData.email.length > 7 &&
        RegisteredData.password === RegisteredData.confirmPass &&
        RegisteredData.answer.length > 1
      ) {
        console.log("value of array is : ", RegisteredData);
        try {
          await fetch("http://localhost:8000/register", {
            method: "POST",
            body: JSON.stringify(RegisteredData),
            headers: { "Content-Type": "application/json" },
          });
          setRegisteredData({
            email: "",
            password: "",
            confirmPass: "",
            securityQuestion: "",
            answer: "",
          });
          navigate("/login");
        } catch (error) {
          console.error("Registration Failed:", error);
          alert("Registration failed. Please try again later.");
        }
      } else {
        alert("Please fill in all fields correctly and password and confirm password must be same");
      }
    }
    else{
      alert("Email already exist");
    }
  };

  return (
    <div className="Signin">
      <form onSubmit={RegisterSubmit}>
        <div className="container-lg" id="main" style={{ height: "100%" }}>
          <h1>Register</h1>
          <div className="mb-3 row">
            <label
              htmlFor="staticEmail"
              className="col-sm-2 col-form-label text-light"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="email"
                value={RegisteredData.email}
                id="Email"
                placeholder="Enter Your Email"
                onChange={registerHandleChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label text-light"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                name="password"
                value={RegisteredData.password}
                id="inputPassword"
                placeholder="Enter Your Password"
                onChange={registerHandleChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="confirmPassword"
              className="col-sm-2 col-form-label text-light"
            >
              Confirm Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                name="confirmPass"
                value={RegisteredData.confirmPass}
                id="confirmPassword"
                placeholder="Re-enter your Password"
                onChange={registerHandleChange}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <label htmlFor="security" className="form-label">
              Security Question
            </label>
            <select
              className="form-select mb-3"
              id="security"
              aria-label=""
              style={{ width: "300px", marginLeft: "10px" }}
              value={RegisteredData.securityQuestion}
              name="securityQuestion"
              onChange={registerHandleChange}
            >
              <option defaultValue>Select Security Question</option>
              <option value="1">What's your nickname?</option>
              <option value="2">What's your pet name?</option>
              <option value="3">What's your school name?</option>
            </select>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="answer"
              className="col-sm-2 col-form-label text-light"
            >
              Answer
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control mb-4"
                id="answer"
                name="answer"
                value={RegisteredData.answer}
                placeholder="Your security question answer is:"
                onChange={registerHandleChange}
              />
            </div>
          </div>
          <div className="d-grid gap-1 col-3 mx-auto">
           
            <button
              className="btn btn-success mb-4"
              type="submit"
              
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
