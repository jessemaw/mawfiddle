import React from "react";
import classes from "./Blurb.module.css";

function Blurb() {
  return (
    <div className={classes["blurb-container"]}>
     <div className={classes.image}>
      <img
        className="blurb-img"
        src="/images/maw-fiddle-blurb-img.jpg"
        alt="maw-fiddle"
      />
    </div>
    <div className={classes["blurb-txt"]}>
      <h1 className={classes.heading}>JESSE MAW</h1>
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
