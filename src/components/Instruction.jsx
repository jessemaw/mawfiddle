import React, { useState } from "react";
import { useTransition, animated, config } from "react-spring";
import useInterval from "use-interval";
import classes from "./Instruction.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";

function Instruction() {
  const testimonials = [
    {
      title:
      "I hired several remote fiddle teachers, but they could not help me go where I wanted to go with my music. Luckily, I eventually found Jesse. I call him my Fiddle Coach along the same lines that all of these top professional sports athletes have coaches. He is willing to go to places with fiddle music where no one has ever gone before.",
      student: "Aaron L",
      id: 0,
    },
    {
      title: "Jesse's accomplished experience playing many styles of music, and his curiosity about music-making, connects what is necessary with a creative space for you as a student to make it your own. As a teacher, Jesse gives you lots of tools to explore and practice with on the path of music-making and developing your own sound.",
      student: "Amy F",
      id: 1,
    },
  ];

  const [index, setIndex] = useState(0);

  const item = testimonials[index];

  const increment = () =>
    setIndex((state) => (state + 1) % testimonials.length);
  useInterval(increment, 9000);

  const transitions = useTransition(item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 400,
    config: config.molasses,
    keys: item => item.id
  });

  return (
    <Card className={classes.container}>
      {transitions(({opacity}, item) => (
        <animated.div key={item.id} className={classes.testimonial} style={{opacity}}>
          <p className={classes.name}>{item.title}</p>
          <p className={classes.name}>{item.student}</p>
        </animated.div>
      ))}
      <div className={classes.rightSide}>
        <h1 className={classes.heading}>INSTRUCTION</h1>
        <p className={classes.instructionText}>
        Jesse has served as an instructor at workshops and festivals across the U.S., including the Shasta Music Summit, the Crown of the Continent Guitar Festival, and Djangofest Northwest.
        He is a skillful private instructor with 10+ years experience. In addition to traditional private and group teaching environments,
        Jesse started a Patreon page that covers diverse music subjects like learning by ear, creativity, composing, and technique


        </p>
        <div className={classes.instButton}>
          <a href="https://www.patreon.com/mawfiddle" target="_blank">
          <Button>
            <FontAwesomeIcon icon={faPatreon} style={{ paddingRight: "8px" }} />
            BECOME A PATRON
          </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}

export default Instruction;
