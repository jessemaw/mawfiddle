import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";
import classes from "./Header.module.css";
import FiddleLogo from "./assets/Images/maw-fiddle-logo.png";

function Header() {
    return <React.Fragment>
     <div className={classes.icons}>
     <a href="https://www.facebook.com/JesseMawOfficial/">
       <FontAwesomeIcon icon={faFacebook} className={classes.facebook} />
       </a>
       <a href="https://www.youtube.com/c/JesseMaw">
       <FontAwesomeIcon icon={faYoutube} className={classes.youtube} />
       </a>
       <a href="https://www.patreon.com/mawfiddle">
       <FontAwesomeIcon icon={faPatreon} className={classes.patreon}/>
       </a>
       </div>
    <div className={classes["logo-container"]}>

        <img className={classes.logo} src={FiddleLogo} alt="maw-fiddle" />
    </div>
      {/* <img className={classes.fhole} src="images/maw-fiddle-fhole.svg" alt="f-hole"/> 
         <img className={classes["fhole-right"]} src="images/maw-fiddle-fhole.svg" alt="f-hole"/>  */}
    <ul className={classes.menu}>
            <li ><a href="/#about" className={classes.pages}>ABOUT</a></li>
            <li ><a href="/#music" className={classes.pages}>MUSIC</a></li>
            <li><a href="/#about" className={classes.pages}>INSTRUCTION</a></li>
            <li><a href="/#about" className={classes.pages}>CONTACT</a></li>
        </ul>
    </React.Fragment>
}

export default Header;