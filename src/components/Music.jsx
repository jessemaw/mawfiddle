import React from "react";
import Card from "../UI/Card";
import classes from "./Music.module.css";
import MusicItem from "./MusicItem";
import JesseMainImg from "../assets/Images/maw-fiddle-blurb-img.jpg";
import WolfPupImg from "../assets/Images/wolf-pup-band-photo-square.jpg";
import XenFiddleImg from "../assets/Images/jessemaw-pianosingle-coverart-alt5.jpg";

function Music(props) {

  return (
    <Card id="music" className={classes.music}>
      <h1 className={classes.heading}>MUSIC</h1>
      <div className={classes.container}>
        <MusicItem
          musicLink="https://youtube.com/playlist?list=PLYVnblqpMUngToq3GrMtyguCWs3yyenRO"
          className={classes.leftTile}
          topImg={JesseMainImg}
          topTitle="MAW FIDDLE"
          topGenre="PROGRESSIVE FIDDLING"
          topDescription="Classic and new fiddle tunes with original arrangements, full of modern, progressive ideas and exploratory improvisation"
          label="jesse-fiddling"
        ></MusicItem>
        <MusicItem
          musicLink="https://sheilaandjesse.bandcamp.com/album/sheila-jesse"
          topTitle="SHEILA & JESSE"
          topGenre="OLDTIME TWIN FIDDLES"
          topDescription="Sheila & Jesse rework fiddle classics with twin fiddle harmony, and add a wide range of originals to the modern fiddle repertoire"
          topImg="https://f4.bcbits.com/img/a4138351956_16.jpg"
          label="Sheila-and-Jesse"
        />
      </div>
      <div className={classes.container}>
        <MusicItem
          musicLink="https://wolfpupstringband.bandcamp.com/"
          className={classes.leftTile}
          topImg={WolfPupImg}
          topTitle="WOLF PUP"
          topGenre="STRING BAND"
          topDescription="Modern traditional stringband playing original tunes from the Blue Ridge mountains of Southern Virginia"
          label="Wolf-Pup-Band"
        />
        <MusicItem
          musicLink="https://www.youtube.com/playlist?list=PLLyu9lB7sFsiQ6591ox-5MQq3j8j6yRiu"
          topTitle="XEN FIDDLE"
          topGenre="EXPERIMENTAL FIDDLING"
          topDescription="Collaboration with Harmonicity. Fiddling with the Harmonic Series, an infinite series of music notes"
          topImg={XenFiddleImg}
          label="Xen-Fiddle"
        />
      </div>
    </Card>
  );
}

export default Music;
