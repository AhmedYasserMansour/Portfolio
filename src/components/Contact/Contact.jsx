import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from './../../Context';

const Contact = _ => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState({ rej: false, res: false });
  const [data, setData] = useState({
    user_name: '',
    user_email: '',
    message: '',
    errors: {}
  });

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validate();
    if (!errors) {
      emailjs
        .sendForm('service_gtv8al9', 'template_da0pw8l', form.current, {
          publicKey: 'BFIqjVQwg6Omg8tOl',
        })
        .then(
          () => {
            setDone({ res: true, rej: false });
            setData(prev => ({ ...prev, user_name: '', user_email: '', message: '', errors: {} }));
          },
          () => {
            setDone({ rej: true, res: false });
          }
        );
    } else {
      setData(prev => ({
        ...prev,
        errors
      }));
    }
  };

  const validate = () => {
    const errors = {};
    if (data.user_name.trim() === '') {
      errors.user_name = "Name Is Required";
    }
    if (data.user_email.trim() === '') {
      errors.user_email = "Email Is Required";
    }
    if (data.message.trim() === '') {
      errors.message = "Message Is Required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact-form" id="contact" style={{backgroundColor : darkMode ? 'black' : 'white'}}>
      <div className="w-left">
        <div className="awesome">
          <span style={{color : darkMode ? 'white' : 'black'}}>Get in Touch</span>
          <br />
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            value={data.user_name}
            onChange={handleChange}
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          {data.errors.user_name && <div className="error" style={{color : darkMode ? 'white' : 'black'}}>{data.errors.user_name}</div>}

          <input
            value={data.user_email}
            onChange={handleChange}
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          {data.errors.user_email && <div className="error" style={{color : darkMode ? 'white' : 'black'}}>{data.errors.user_email}</div>}

          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            className="user"
            placeholder="Message"
          />
          {data.errors.message && <div className="error" style={{color : darkMode ? 'white' : 'black'}}>{data.errors.message}</div>}

          <input type="submit" className="button" value="Send" />

          <span>
            {done.res
              ? "Thanks for Contacting me"
              : done.rej 
              ? "We are sorry that your message was not sent. Please try again"
              : ""}
          </span>

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
