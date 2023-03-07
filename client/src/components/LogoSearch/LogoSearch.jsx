import React from "react";
import Logo from "../../img/socially.png";
import './LogoSearch.css'
import { Link, Navigate } from "react-router-dom";
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to="../home/">
      <img src={Logo} alt="" width="55%"/>
      </Link>
      {/* <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <button className="btn">Search</button>
          </div>
      </div> */}
    </div>
  );
};

export default LogoSearch;
