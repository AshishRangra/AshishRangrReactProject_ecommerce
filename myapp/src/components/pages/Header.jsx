import React, { useContext, useEffect } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Person2Icon from "@mui/icons-material/Person2";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Context } from "../../Context/createContext";
// import { cardData } from "../dummydata/DummyData";
import "../css2/LandingPAge.css";
const Header = () => {
  const { Submit, Search, arr, active, jsonArr, fetchData } =
    useContext(Context);
  useEffect(() => {
    fetchData("logoUrl");
  }, []);

  return (
    <>
      <div className="container11">
        <div className="top-left">
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <XIcon />
          </a>
          <a href="https://www.instagram.com">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <LinkedInIcon />
          </a>
        </div>
        <div className="top-right">
          <a href="https://www.google.com/maps/place/Sahibzada+Ajit+Singh+Nagar,+Punjab/@30.6983887,76.6560949,13z/data=!3m1!4b1!4m6!3m5!1s0x390fee906da6f81f:0x512998f16ce508d8!8m2!3d30.7046486!4d76.7178726!16zL20vMDR0NzI1?entry=ttu">
            {" "}
            <FmdGoodIcon />
          </a>
          <span>Mohali,India</span>
          <PhoneIcon />
          <span>+91948747230</span>
          <a href="/login">
            {" "}
            <Person2Icon />
          </a>
        </div>
      </div>
      <div className="Header">
        <div className="Logo-block">
          <img
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnblXz6yWh26Ojn4C71zRX190TXQ2AxjCMQ&usqp=CAU"
            src={
              jsonArr.logoUrl.length !== 0
                ? jsonArr.logoUrl && jsonArr.logoUrl[0].imgSrc
                : "wait"
            }
            alt="logo"
            className="logo"
          />
        </div>
        <div className="search-Items">
          <select name="searchItems" className="searchItems" id="">
            <option value="All Categories">All Categories</option>
            <option value="fashion">Amazon Fashion</option>
            <option value="toys">Toys Games</option>
            <option value="beauty">Beauty</option>
            <option value="apparel">Clothing Accessories</option>
            <option value="computers">Computers Accessories</option>
            <option value="computers">Computers Accessories</option>
            <option value="hpc">Health Personal Care</option>
            <option value="stripbooks">Books</option>
            <option value="mobile-apps">Apps Games</option>
            <option value="watches">Watches</option>
            <option value="alexa-skills">Alexa Skills</option>
            <option value="videogames">Video Games</option>
          </select>
          <form onSubmit={Submit}>
            <input
              type="text"
              placeholder="Search Products"
              name="search"
              onChange={Search}
              className="search-field"
            />
          </form>
          <ul className="search-dropdown">
            {arr.length === 0
              ? active === "Not Found" && <li>Not Found!</li>
              : arr.map((value, index) => (
                  <a href={`#${value.title}`}>
                    <li key={index}>{value.title}</li>
                  </a>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
