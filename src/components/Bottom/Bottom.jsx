import React from "react";
import Card from "../../UI/Card";
import ContactForm from "./ContactForm";
import classes from "./Bottom.module.css";
import MailChimpSubscribe from "react-mailchimp-subscribe";
import NewsletterMail from "./NewsletterMail";

function Bottom(props) {

  
  return (
    <Card className={classes.bigBox}>
    <MailChimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} render={({subscribe, status, message}) => (
        <NewsletterMail  status={status} message={message} onValidated={formData => subscribe(formData)}/>
    )}/>
      <ContactForm />
    </Card>
  );
}

export default Bottom;
