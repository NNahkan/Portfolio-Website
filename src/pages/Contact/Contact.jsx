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
  const [formErrors, setFormErrors] = useState({});

  const handleChange = ({ target: { value, name } }) => {
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = ({ target: { name } }) => {
    console.log(name);
    formErrors[name] && console.log(formErrors);
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const isStateFilled = () => {
    setFormErrors({});
    for (const key in formInputs) {
      if (!formInputs[key]) {
        setFormErrors((prev) => ({ ...prev, [key]: `${key} can't be empty` }));
      }
    }
    formErrors && console.log("hata vercek");
    return false;
  };

  const sendEmail = () => {
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
          alert("Thanks for the message!");
          setFormInputs(FORM_OBJ);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    isStateFilled() ? sendEmail() : alert("wrong");
    setLoading(false);
  };

  const formData = [
    { type: "text", name: "name" },
    { type: "email", name: "email" },
  ];
  return (
    <div className="container">
      <h1 className="section-header">Contact</h1>
      {formErrors && <p>{formErrors.name}</p>}
      {formErrors && <p>{formErrors.email}</p>}
      {formErrors && <p>{formErrors.message}</p>}
      <p>Get in touch or shoot me an email directly on hoksuz2424@gmail.com </p>
      <form ref={formRef} className={s.contactForm} onSubmit={handleSubmit}>
        {formData.map((item) => (
          <div style={{ position: "relative" }} key={item.name}>
            <input
              className={s.inputForm}
              name={item.name}
              type={item.type}
              onBlur={(e) => handleBlur(e)}
              placeholder={item.name}
              value={formInputs[item.name]}
              onChange={(e) => handleChange(e)}
            />
            {formErrors[item.name] && (
              <span className={s.errorFormMessage}>
                {item.name} {formErrors[item.name]}
              </span>
            )}
          </div>
        ))}
        <div style={{ position: "relative" }}>
          <textarea
            className={`${s.inputForm} ${s.messageArea}`}
            name="message"
            placeholder="Message"
            rows="5"
            value={formInputs.message}
            onChange={(e) => handleChange(e)}
          />
          <span className={s.errorFormMessage}>Message problem problem</span>
        </div>
        <button className="btn">{loading ? "Sending" : "Send Message"}</button>
      </form>
    </div>
  );
};

export default Contact;
