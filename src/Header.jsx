import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";
import classes from "./Header.module.css";
import FiddleLogo from "./assets/Images/maw-fiddle-logo.png";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import HamburgerIcon from "./components/Mobile/HamburgerIcon";

function Header(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <Router>
      <div className={classes.headerContainer}>
        {!isMobile && (
          <div className={classes.icons}>
            <a href="https://www.facebook.com/JesseMawOfficial/">
              <FontAwesomeIcon icon={faFacebook} className={classes.facebook} />
            </a>
            <a href="https://www.youtube.com/c/JesseMaw">
              <FontAwesomeIcon icon={faYoutube} className={classes.youtube} />
            </a>
            <a href="https://www.patreon.com/mawfiddle">
              <FontAwesomeIcon icon={faPatreon} className={classes.patreon} />
            </a>
          </div>
        )}
        <div className={classes["logo-container"]}>
          <img className={classes.logo} src={FiddleLogo} alt="maw-fiddle" />
        </div>
        <div className={classes.hamburger}>
          {isMobile && (
            <HamburgerIcon change={props.change} onClick={props.onToggle} />
          )}
        </div>
      </div>
      {/* <img className={classes.fhole} src="images/maw-fiddle-fhole.svg" alt="f-hole"/> 
         <img className={classes["fhole-right"]} src="images/maw-fiddle-fhole.svg" alt="f-hole"/>  */}

      {!isMobile && (
        <ul className={classes.menu}>
          <li>
            <NavLink smooth to="/#about" className={classes.pages}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink smooth to="/#music" className={classes.pages}>
              MUSIC
            </NavLink>
          </li>
          <li>
            <NavLink smooth to="/#instruction" className={classes.pages}>
              INSTRUCTION
            </NavLink>
          </li>
          <li>
            <NavLink smooth to="/#contact" className={classes.pages}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      )}
    </Router>
  );
}

export default Header;
