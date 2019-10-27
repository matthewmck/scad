import React from "react";
import Logo from "../assets/scad-logo-cropped.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img className="header__logo" src={Logo} alt="" />
        <h1 className="header__invisible-h1">SCAD Facility Locations</h1>
      </div>
      <hr className="header__hr" />
    </header>
  );
};

export default Header;
