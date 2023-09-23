// eslint-disable-next-line no-unused-vars
import React from "react";
import s from "./Contact.module.css";

const Contact = () => {
  const formData = [
    { type: "text", name: "name" },
    { type: "email", name: "email" },
  ];
  return (
    <div className="container">
      <h1 className="section-header">Contact</h1>
      <p>Get in touch or shoot me an email directly on hoksuz2424@gmail.com </p>
      <form className={s.contactForm} action="">
        {formData.map((item) => (
          <input
            className={s.inputForm}
            key={item.name}
            type="text"
            placeholder={item.name}
          />
        ))}
        <textarea
          className={`${s.inputForm} ${s.messageArea}`}
          name="message"
          placeholder="Message"
          rows="5"
        ></textarea>
        <button className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
