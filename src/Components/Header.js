import React from "react";
import profile from "../my-channel.jpeg";
import logo1 from "../Lotus_logo1.jpg";
import "../Styles/Header.css";
import { Link } from "react-router-dom";
import InvoiceListing from "./InvoiceListing";


const Header = () => {
  return (
    <>
      <div className="container1">
        <div className="left">
          <img src={logo1} alt="logo" />
        </div>
        <div className="middle">
          {/* <div><Link to="/">about us</Link></div> */}

        </div>
        <div className="right">
        <Link className="logout" to="/">Logout</Link> 

          <img src={profile} alt="logo" />
        </div>
      </div>

      <InvoiceListing />
    </>
  );
};

export default Header;
