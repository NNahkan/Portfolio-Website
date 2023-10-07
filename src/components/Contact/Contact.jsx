// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import s from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const FORM_OBJ = {
  name: "",
  email: "",
  message: "",
};

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;
const myEmail = import.meta.env.VITE_EMAILJS_EMAIL;

const Contact = () => {
  const formRef = useRef();
  const [formInputs, setFormInputs] = useState(FORM_OBJ);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { value, name } }) => {
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formInputs.name,
          to_name: "Ali",
          from_email: formInputs.email,
          to_email: myEmail,
          message: formInputs.message,
        },
        userId
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks for message!");
          setFormInputs(FORM_OBJ);
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong.");
        }
      );
  };

  const formData = [
    { type: "text", name: "name" },
    { type: "email", name: "email" },
  ];
  return (
    <div className="container">
      <h1 className="section-header">Contact</h1>
      <p>Get in touch or shoot me an email directly on hoksuz2424@gmail.com </p>
      <form ref={formRef} className={s.contactForm} onSubmit={handleSubmit}>
        {formData.map((item) => (
          <input
            className={s.inputForm}
            key={item.name}
            name={item.name}
            type="text"
            placeholder={item.name}
            value={formInputs[item.name]}
            onChange={(e) => handleChange(e)}
          />
        ))}
        <textarea
          className={`${s.inputForm} ${s.messageArea}`}
          name="message"
          placeholder="Message"
          rows="5"
          value={formInputs.message}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <button disabled className="btn">
          {loading ? "Sending" : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
