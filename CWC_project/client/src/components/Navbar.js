import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link
            to="/CWC"
            className="navbar__navbar-logo"
            onClick={closeMobileMenu}
          >
            CWC
          </Link>
          <div className="navbar__menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={click ? "navbar__nav-menu active" : "navbar__nav-menu"}
          >
            <li className="navbar__nav-item">
              <Link
                to="/home"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="navbar__nav-item">
              <Link
                to="/post"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                Post
              </Link>
            </li>
            <li className="navbar__nav-item">
              <Link
                to="/explorer"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                Explorer
              </Link>
            </li>
            <li className="navbar__nav-item">
              <Link
                to="/create"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                Create
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="navbar__nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="navbar__btn--outline">SIGN UP</Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
