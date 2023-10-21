// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import s from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";

const FORM_OBJ = {
  name: "",
  email: "",
  message: "",
};

const spanVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
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

  const isStateFilled = () => {
    let newErrors = {};
    for (const key in formInputs) {
      if (!formInputs[key].trim(" ")) {
        newErrors = { ...newErrors, [key]: `${key} is a required field` };
      }
    }
    setFormErrors(newErrors);
    return Object.keys(newErrors).length ? false : true;
  };

  const sendEmail = () => {
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
          alert("Thanks for the message!");
          setFormInputs(FORM_OBJ);
        },
        (error) => {
          setLoading(false);
          console.log(error);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    isStateFilled() && sendEmail();
  };

  const capitalizeSentence = (sentence) => {
    const capitalized = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    return capitalized;
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
          <div key={item.name} style={{ position: "relative" }}>
            <input
              className={s.inputForm}
              name={item.name}
              type={item.type}
              placeholder={item.name}
              value={formInputs[item.name]}
              onChange={(e) => handleChange(e)}
            />
            <AnimatePresence>
              {formErrors[item.name] && !formInputs[item.name].trim(" ") && (
                <motion.span
                  key={item.name}
                  className={s.errorFormMessage}
                  variants={spanVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {capitalizeSentence(formErrors[item.name])}
                </motion.span>
              )}
            </AnimatePresence>
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
            maxLength="320"
          />
          <AnimatePresence>
            {formErrors.message && !formInputs.message.trim(" ") && (
              <motion.span
                key="message"
                className={s.errorFormMessage}
                variants={spanVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {capitalizeSentence(formErrors.message)}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <button className="btn">{loading ? "Sending" : "Send Message"}</button>
      </form>
    </div>
  );
};

export default Contact;
