import React, { forwardRef, useState } from "react";
import email from "../assets/@.png";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef } from "react";
const Contact = forwardRef((props, ref) => {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yf77v0f",
        "template_mjaciy8",
        formRef.current,
        "d7D5_d0f0UEO16kJ6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <div
      id="Contact"
      className="h-[100vh]  snap-center flex flex-col items-center justify-between mb-[100px] max-lg:p-10 max-lg:ml-[0px] max-sm:py-[50px] "
      ref={ref}
    >
      <div className="h-[100vh] snap-center w-[70%] flex justify-center gap-[10px] max-sm:flex-col max-lg:w-[100%] max-lg:gap-[30px] ">
        {/* Left Side */}
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: -300 }}
          className="flex flex-col items-start gap-[3px] justify-center max-lg:items-center "
        >
          <h1 className="text-[50px]  max-lg:text-center max-lg:text-[30px] ">
            Interested in working together? Send me a message!
          </h1>
          <div className="flex justify-center items-center gap-[15px]">
            <img src={email} className="w-[40px]" />
            <h2>jared.a.molina01@gmail.com</h2>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: 300 }}
          className="flex flex-col gap-[10px] justify-center  items-center max-lg:items-center max-lg:gap-[5px] "
        >
          <form
            className="w-[550px] flex flex-col gap-[10px] max-lg:w-[100%] max-lg:gap-2"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <h1 className="text-[30px]  mb-[0] text-white max-lg:text-center">
              Contact
            </h1>
            <input
              className="p-[15px] bg-slate-100 border-none rounded-[5px] text-black max-lg:h-[15px]"
              placeholder="Name"
              name="name"
            />
            <input
              className="p-[15px]  bg-slate-100 border-none rounded-[5px] text-black max-lg:h-[15px]"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="p-[15px]  bg-slate-100 border-none rounded-[5px] text-black "
              rows={7}
              placeholder="Write your message"
              name="message"
            />
            <button
              className="bg-[#629a8e] text-white border-none justify-center items-center
            font-bold cursor-pointer rounded-[5px] max-lg:h-[30px] max-lg:w-[150px]"
            >
              Send
            </button>
            {success &&
              "Your message has been sent. I'll get back to you as soon as possible"}
          </form>
        </motion.div>
      </div>
    </div>
  );
});

export default Contact;
