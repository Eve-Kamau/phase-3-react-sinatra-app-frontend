import React from "react";
import logo from "../images/logo.jpg";

function Header() {
  return (
    <>
    <img src={logo} alt="Logo" width="100" height="100" padding="100" id="main-header"/>
    <p>AFRO TALANTA 911 JOBS DASHBOARD</p>
    <p>This application allows users to see open job listings for possible recruitment where you can apply what interests you.</p>
    
  </>
  );
}

export default Header;
