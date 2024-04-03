import { LandingPage } from "../src/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPAge from "./components/Login/LoginPAge";
import Register from "./components/Login/Register";
import ForgotPassword from "./components/Login/ForgotPassword";

import Cart from "./components/Body/Cart";
import Admin from "./Admin/Admin";
import Contact from "./Footer_Files/Contact";
import MenProducts from "./components/Products/MenProducts";
import AboutUs from "./components/Products/AboutUs";
import KidsProducts from "./components/Products/KidsProducts";
import WomenProducts from "./components/Products/WomenProducts";
import ViewContent from "./components/cartPages/viewContent";
function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPAge />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />

          <Route path="/Cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/men" element={<MenProducts/>}/>
          <Route path="/women" element={<WomenProducts/>}/>
          <Route path="/kids" element={<KidsProducts/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/displayProduct" element={<ViewContent/>}/>
          
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
