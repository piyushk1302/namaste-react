import { useState } from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              loginBtn==="Login"? setloginBtn("Logout"):setloginBtn("Login")
            }}>{loginBtn}</button>
          </ul>
        
      </div>
    );
  };

  export default Header;