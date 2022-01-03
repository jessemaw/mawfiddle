import React from "react";
import classes from "./Footer.module.css";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <div className={classes.footerContainer}>
        <p className={classes.footerText}>© Jesse Maw {currentYear}</p>
    </div>
}

export default Footer;