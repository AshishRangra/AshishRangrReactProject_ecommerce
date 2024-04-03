import "./css/AdminViewData.css"
import React, { useState } from "react";

const Admin_carousel = () => {
  const [carouselImg, setcarouselImg] = useState({
    imgSrc: "",
  });
  const carouselImgChange = (e) => {
    setcarouselImg(e.target.value);
  };

  const changecarouselImginApi = async (e) => {
    e.preventDefault();
    console.log(carouselImg);
    const imgSrcUrl = {
      imgSrc: carouselImg,
    };
    try {
      await fetch(`http://localhost:8000/carouselUrl`, {
        method: "POST",
        body: JSON.stringify(imgSrcUrl),
        headers: { "Content-Type": "application/json" },
      });
      console.log("Successfull");
      setcarouselImg({
        imgSrc: "",
      })
    } catch (error) {
      console.log("Unable to store");
    }
  };

  return (
    <div>
    
      <div >
        <form onSubmit={changecarouselImginApi}>
        <label htmlFor="carouselImg">Carousel-Image</label>
          <input
            type="text"
            name="imgSrc"
            value={carouselImg.imgSrc}
            id="carouselImg"
            onChange={carouselImgChange}
          />

        
          <button type="submit" className="Submitbutton" >Change </button>
        </form>
      </div>
    </div>
  );
};

export default Admin_carousel;
