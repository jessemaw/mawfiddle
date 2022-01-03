import React from "react";
import classes from "./MusicItem.module.css";

function MusicItem(props) {
  return (
      <a className={classes.content} href={props.musicLink} target="_blank">
      <img className={classes.img} src={props.topImg} alt={props.label}/>

      <div className={classes.item}>
        <h2 className={classes.title}>{props.topTitle}</h2>
        <p className={classes.subtitle}>{props.topGenre}</p>
      </div>
      <p className={classes.description}>{props.topDescription}</p>
      </a>
  
  );
}

export default MusicItem;
