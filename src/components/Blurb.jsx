import React from "react";
import { useMediaQuery } from "react-responsive";
import classes from "./Blurb.module.css";
import JesseMainImg from "../assets/Images/maw-fiddle-blurb-img.jpg";

function Blurb() {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <div id="about" className={classes["blurb-container"]}>
     <div className={classes.image}>
      <img
        className="blurb-img"
        src={JesseMainImg}
        alt="maw-fiddle"
        >
      </img>
      {isMobile && <h1 className={classes.firstName}>JESSE</h1>}
      {isMobile && <h1 className={classes.lastName}>MAW</h1>}
    </div>
    <div className={classes["blurb-txt"]}>
      {!isMobile && <h1 className={classes.heading}>JESSE MAW</h1>}
      <p className={classes.paragraph}>
        In the art of fiddle playing, Jesse Maw is simultaneously dedicated to preservation
        and innovation. Jesse uses his wide-ranging influence of musical styles
        and cultures to open up new sounds and help others find their unique sound at the
        same time. Listen to his latest music, sign up for the giant library of
        instructional videos, or get in touch below
      </p>
      </div>
      </div>
  );
}

export default Blurb;
