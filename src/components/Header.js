import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div>Recycle Master</div>
        <div className="img">
          <img src="/img/recyklace.png" alt="Logo" />
        </div>
      </div>
      <div className="login">
        Lukáš
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="30" r="20" fill="#435A59" />
          <path
            d="M50,60 C30,60 20,75 20,85 L80,85 C80,75 70,60 50,60 Z"
            fill="#435A59"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
