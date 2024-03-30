import React from "react";
import "../src/components/css2/LandingPAge.css";

import Header from "./components/pages/Header";
import Header2 from "./components/pages/Header2";
import Body from "./components/pages/Body";
import Footer from "./Footer_Files/Footer";
// import Store from "./Context/Store";
export const LandingPage = () => {
  return (
    <div className="App">
      <Header />
      <Header2 />
      <Body />
      <Footer />
      {/* <Store></Store> */}
    </div>
  );
};
