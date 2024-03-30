import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/createContext";

const Admin_Logo = () => {
  const [logo, setLogo] = useState({
    logoUrl: "",
  });
  const { fetchData, jsonArr } = useContext(Context);
  const LogoChange = (e) => {
    setLogo(e.target.value);
  };
  useEffect(() => {
    fetchData("logoUrl");
  }, []);
  const changeLogoinApi = async (e) => {
    e.preventDefault();
    if (jsonArr.logoUrl.length !== 0) {
      console.log(jsonArr);
      const ID = jsonArr.logoUrl[0].id;
      console.log("ID is", ID);
      console.log(logo);
      try {
        await fetch(`http://localhost:8000/logoUrl/${jsonArr.logoUrl[0].id}`, {
          method: "PUT",
          body: JSON.stringify({ logoUrl: logo }),
          headers: { "Content-Type": "application/json" },
        });
        console.log("Successfull");
      } catch (error) {
        console.log("Unable to store");
      }
    } else {
      console.log("object is empty");
    }
    setLogo({
      logoUrl: "",
    });
  };
  // "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnblXz6yWh26Ojn4C71zRX190TXQ2AxjCMQ&usqp=CAU",
  // "id": "447c"

  return (
    <div>
      Admin_Logo
      <div>
        <form onSubmit={changeLogoinApi}>
          <input
            type="text"
            name="logoUrl"
            value={logo.logoUrl}
            id="logo"
            onChange={LogoChange}
          />

          <label htmlFor="logo">Logo URL</label>
          <button type="submit">Change Logo</button>
        </form>
      </div>
    </div>
  );
};

export default Admin_Logo;
