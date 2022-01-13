import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./MenuModal.module.css";
import { HashLink as NavLink } from "react-router-hash-link";

function Backdrop(props) {
  return (
    <div
      className={`${classes.backdrop} ${props.className}`}
      onClick={props.onClose}
    />
  );
}

function ModalOverlay(props) {
  return (
    <Router>
      <Card className={classes.modal}>
        <header className={classes.closeContainer}>
          <button className={classes.close} onClick={props.onClose}>
            <h1>X</h1>
          </button>
        </header>
        <ul className={classes.menu}>
          <li>
            <NavLink onClick={props.onClose} smooth to="/#about">
              <h2>ABOUT</h2>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={props.onClose} smooth to="/#music">
              <h2>MUSIC</h2>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={props.onClose} smooth to="/#instruction">
              <h2>INSTRUCTION</h2>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={props.onClose} smooth to="/#newsletter">
              <h2>NEWSLETTER</h2>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={props.onClose} smooth to="/#contact">
              <h2>CONTACT</h2>
            </NavLink>
          </li>
        </ul>
      </Card>
    </Router>
  );
}

function MenuModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default MenuModal;
