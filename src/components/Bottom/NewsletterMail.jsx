import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";
import classes from "./NewsletterMail.module.css";

function NewsletterMail({ status, message, onValidated }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(enteredEmail.includes("@"));
    }, 100);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail]);


  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function validateEmailHandler() {
    setEmailIsValid(enteredEmail.includes("@"));
  }

  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

    const success = status === "success";

  return (
    <Card className={classes.newsletter}>
      <h1 className={classes.heading}>NEWSLETTER</h1>
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.logoContainer}>
            <img
              className={classes.logo}
              src="images/Maw%20fiddle%20logo.png"
              alt="maw-fiddle"
            />
          </div>
          <React.Fragment>
            {status === "error" && (
              <div dangerouslySetInnerHTML={{ __html: message }} />
            )}
            {status === "success" && (
              <div>
                <h2 className={classes.emailText}>Thanks for signing up!</h2>
              </div>
            )}
            {!success && 
            <React.Fragment>
            <h2 className={classes.emailText}>
              Every month, receive an exclusive email with the latest Maw Fiddle
              updates, newly added tunes, lessons, and more
            </h2>
            <input
              type="email"
              className={`${classes.email} ${
                    emailIsValid === false ? classes.invalid : ""
                  }`}
              placeholder="Enter Email"
              ref={(node) => (email = node)}
              tabIndex="1"
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
            <button
              type="button"
              onClick={submit}
              className={classes.signUp}
              disabled={!formIsValid}
            >
              {!status && "SIGN UP"}
              {status === "sending" && "SENDING..."}
            </button>
            </React.Fragment>}
          </React.Fragment>
        </div>
      </div>
    </Card>
  );
}

export default NewsletterMail;
