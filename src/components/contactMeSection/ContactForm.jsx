import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setSuccess("❌ All fields are required!");
      return;
    }

    emailjs
      .sendForm(
        "service_sijgqqa",    // Service ID
        "template_rtaqrhi",   // Template ID
        form.current,
        "0pbZoSqVDFIFi5I59" // Public Key
      )
      .then(
        (response) => {
          console.log("✅ Email Sent!", response);
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("✅ Message Sent Successfully!");
          setTimeout(() => setSuccess(""), 5000);
        }
      )
      .catch((error) => {
        console.error("❌ Email Sending Failed:", error);
        setSuccess("❌ Failed to send message. Try again!");
      });
  };

  return (
    <div >
      {success && <p className="text-center text-green-600">{success}</p>}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full h-12 px-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
             className="w-full h-12 px-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
      
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          required
           className="w-full p-2 text-black placeholder-gray-400 round-lg borclader focus:outline-none focus:ring-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full h-12 text-xl font-bold transition-all duration-500 border rounded-lg text-darkOrange border-cyan-500 hover:bg-cyan-700 bg-cyan-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
