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
      Admin_carouselImg
      <div>
        <form onSubmit={changecarouselImginApi}>
          <input
            type="text"
            name="imgSrc"
            value={carouselImg.imgSrc}
            id="carouselImg"
            onChange={carouselImgChange}
          />

          <label htmlFor="carouselImg">carouselImg URL</label>
          <button type="submit">Change carouselImg</button>
        </form>
      </div>
    </div>
  );
};

export default Admin_carousel;
