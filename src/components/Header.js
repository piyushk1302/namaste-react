import { useState } from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
const Header = () => {
  let [loginBtn,setloginBtn] = useState("Login")
    return (
      <div className="header">
        <img
          className="res-logo"
          alt="res-logo"
          src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"
        />
        
          <ul className="nav-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              loginBtn==="Login"? setloginBtn("Logout"):setloginBtn("Login")
            }}>{loginBtn}</button>
          </ul>
        
      </div>
    );
  };

  export default Header;