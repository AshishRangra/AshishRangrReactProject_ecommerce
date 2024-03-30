import React, { useContext, useEffect, useState } from "react";
import "./LoginPage.css";
import { Context } from "../../Context/createContext";
import { useNavigate } from "react-router-dom";
const LoginPAge = () => {
  const {fetchData, jsonArr} = useContext(Context);
  const navigate=useNavigate()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLoginChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetchData("register");
  }, []);
  const LoginSubmit = (e) => {
    e.preventDefault();
    const checkedData = jsonArr.register.filter((value) => {
      return (
        value.email === loginData.email && value.password === loginData.password
      );
    });
    if (checkedData.length !== 0) {
      alert("Login successfully");
      navigate("/");
    }
    else{
      alert("username and password doesnot match")
    }
  };
  return (
    <div className="Signin">
      {" "}
      <div className="container-sm" id="main">
        <h1>Welcome to Login Page</h1>
        <form onSubmit={LoginSubmit}>
          <div className="mb-3 row">
            <label
              for="staticEmail"
              className="col-sm-2 col-form-label text-light"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="email"
                className="form-control"
                id="staticEmail"
                onChange={handleLoginChange}
                value={loginData.email}
                placeholder="Enter Your Email"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label
              for="inputPassword"
              className="col-sm-2 col-form-label text-light"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputPassword"
                onChange={handleLoginChange}
                value={loginData.password}
                placeholder="Enter Your Passowrd"
              />
            </div>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
            />
            <label for="" className="form-label text-light">
              Remember me
            </label>
          </div>

          <div className="d-grid gap-1 col-3 mx-auto">
            <button className="btn btn-success" type="submit">
              Login
            </button>
          </div>
        </form>
        <a href="/register" style={{ color: "white" }}>
          Register
        </a>
        <a href="/forgotPassword" style={{ color: "white" }}>
          / Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default LoginPAge;
