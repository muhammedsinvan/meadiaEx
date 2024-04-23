 import React, { useState } from 'react';
 import './Navbar.css';
 import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src='https://www.exmedia.in/assets/images/logo/exlogo.png' alt='LOGO'/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <CloseIcon style={{width:"2rem",height:"3rem"}}/> : <Hamburger />}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              HOME
            </li>
            <li>
              ABOUT
            </li>
            <li>
              SERVICES
            </li>
            <li>
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);


export default Navbar;