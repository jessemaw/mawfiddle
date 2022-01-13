import React from "react";
import classes from "./HamburgerIcon.module.css";

function HamburgerIcon(props) {
  return (
    <div
      className={` ${classes.container} ${
        props.change ? classes.change : null
      }`}
      onClick={props.onClick}
    >
      <div className={classes.bar1}></div>
      <div className={classes.bar2}></div>
      <div className={classes.bar3}></div>
    </div>
  );
}

export default HamburgerIcon;
