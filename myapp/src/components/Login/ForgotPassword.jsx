import React, { useContext, useEffect, useState } from "react";
import "./LoginPage.css";
import { Context } from "../../Context/createContext";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [active, setActive] = useState("SignIn");
  const { fetchData, jsonArr } = useContext(Context);
  const [forgotData, setForgotData] = useState({
    email: "",
    securityQuestion: "",
    answer: "",
  });
  const [ID, setID] = useState(null);
  const [changedData, setChangedData] = useState({
    password: "",
    confirmPass: "",
  });
  const navigate = useNavigate();
  const forgotHandleChange = (e) => {
    setForgotData({ ...forgotData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetchData("register");
  }, []);

  const verifiedData = () => {
    console.log("Forgot data : ", forgotData);
    console.log("jsonArr ", jsonArr.register);
    const verification = jsonArr.register.filter((value) => {
      return (
        value.email === forgotData.email &&
        value.securityQuestion === forgotData.securityQuestion &&
        value.answer === forgotData.answer
      );
    });
    console.log("Verification ", verification);
    if (!verification.length !== 0) {
      // id = verification[0].id;
      let firstVerification = verification[0];
      setID(firstVerification.id);

      // navigate("#changePassword");
      setActive("changePassword");
      // setUserDetails(verification);
    } else {
      alert("Your's detail does not match");
      setForgotData({ email: "", securityQuestion: "", answer: "" });
    }
  };

  // changePassword

  const handleInputChange = (e) => {
    setChangedData({ ...changedData, [e.target.name]: e.target.value });
  };
  const ChangedData = async () => {
    const docx = {
      email: forgotData.email,
      securityQuestion: forgotData.securityQuestion,
      answer: forgotData.answer,
      password: changedData.password,
      confirmPass: changedData.confirmPass,
    };
    console.log("Docsx", docx);

    if (
      changedData.password === changedData.confirmPass &&
      changedData.password.length >= 8
    ) {
      console.log("Inside id ", ID);
      await fetch(`http://localhost:8000/register/${ID}`, {
        method: "PUT",
        body: JSON.stringify(docx),
        headers: { "Content-Type": "application/json" },
      });
      alert("Password Changed Successfully");

      navigate("/login");
    } else {
      alert("Both passwords must be same");
    }
  };
  return (
    <>
      <div
        className="Signin"
        id="SignIn"
        style={{ display: active === "SignIn" ? "flex" : "none" }}
      >
        <div className="container-sm" id="main">
          <h1>Forgot Password?</h1>
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
                id="staticEmail"
                name="email"
                onChange={forgotHandleChange}
                placeholder="Enter Your Email"
                value={forgotData.email}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <label htmlFor="security" className="form-label">
              Security Question
            </label>
            <select
              className="form-select mb-3 "
              id="security"
              aria-label=""
              name="securityQuestion"
              onChange={forgotHandleChange}
              value={forgotData.securityQuestion}
              style={{ width: "300px", marginLeft: "10px" }}
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
                value={forgotData.answer}
                onChange={forgotHandleChange}
                placeholder="Your security question answer is:"
              />
            </div>
          </div>
          <div className="d-grid gap-1 col-3 mx-auto">
            <button className="btn btn-success" onClick={verifiedData}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* changePAssword ===========================================================================*/}
      <div
        className="Signin"
        style={{ display: active === "changePassword" ? "flex" : "none" }}
      >
        <div className="container-sm" id="main">
          <h1>Change Password</h1>
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
                className="form-control"
                name="password"
                onChange={handleInputChange}
                value={changedData.password}
                id="inputPassword"
                placeholder="Enter Your Passowrd"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              for="inputPassword"
              className="col-sm-2 col-form-label text-light"
            >
              Confirm Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                name="confirmPass"
                id="inputPassword"
                onChange={handleInputChange}
                value={changedData.confirmPass}
                placeholder="Re-enter your Password"
              />
            </div>
          </div>
          <div className="d-grid gap-1 col-3 mx-auto">
            <button className="btn btn-success" onClick={ChangedData}>
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
