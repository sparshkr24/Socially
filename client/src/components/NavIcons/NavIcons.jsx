import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="home" />
      </Link>
      <UilSetting />
      <img src={Noti} alt="Notification" />
      <Link to="../chat">
        <img src={Comment} alt="Chat" />
      </Link>
    </div>
  );
};

export default NavIcons;
