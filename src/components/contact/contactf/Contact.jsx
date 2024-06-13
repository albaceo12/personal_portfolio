import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import Title from "../../home/title/Title";
import "./Contact.css";
const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  // ================= Error Messages End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  };
  // ================= Email Validation End here =================

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      // axios.post("https://getform.io/f/e18ee560-5133-4cfe-9a48-eddb6f012a9f", {
      //   name: clientName,
      //   email: email,
      //   message: messages,
      // });
      setSuccessMsg(
        `Hello dear ${clientName}, Your messages has been sent successfully. Thank you for your time!`
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };
  return (
    <div className="contact">
      <Title title="Get" subTitle="in Touch" />
      <div className="contact-1">
        <div className="contact-1-1">
          <p className="contact-1-1-p">
            <span className="contact-1-1-p-span">Address:</span>
            <span className="resp-span">Cali, USA</span>
          </p>
          <p className="contact-1-1-p">
            <span className="contact-1-1-p-span">Phone:</span>
            <span className="resp-span">+1 (302) - 8312792</span>
          </p>
        </div>
        <div className="contact-1-2">
          <p className="contact-1-1-p">
            <span className="contact-1-1-p-span">Email:</span>
            <span className="resp-span resp-email">h.nouri1999@gmail.com</span>
          </p>
          <p className="contact-1-1-p">
            <span className="contact-1-1-p-span">Freelance:</span>
            <span className="resp-span">Available</span>
          </p>
        </div>
      </div>
      <div className="contact-2">
        <Title title="Send" subTitle="Messages" />
        {successMsg ? (
          <p className="success-p">{successMsg}</p>
        ) : (
          <form
            id="form"
            // action="https://getform.io/f/e18ee560-5133-4cfe-9a48-eddb6f012a9f"
            // method="POST"
            className="form"
          >
            <div className="div-inp">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName ? "div-inp-1-t" : "div-inp-1-f"
                } div-inp-1`}
                // className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail ? "div-inp-1-t" : "div-inp-1-f"
                } div-inp-1`}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`${
                errMessages ? "div-inp-1-t" : "div-inp-1-f"
              } div-inp-1`}
              style={{ resize: "none" }}
              placeholder="Your Message"
              rows="4"
            ></textarea>
            <button onClick={handleSend} className="btn-sendmsg">
              Send Message{" "}
              <span className="btn-sendmsg-span">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
