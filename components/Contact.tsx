"use client"
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const [btnHover, setbtnHover] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = React.useState("");

  const sumbitHandler = async (event: any) => {
    setName("");
    setEmail("");
    setMsg("");
    setBtnClick(true);
    event.preventDefault();
    setTimeout(() => {
      setBtnClick(false);
    }, 1500);

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cdbf0204-4b37-49e1-8597-311e3d5697b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="h-auto w-full bg-zinc-900 flex sm:flex-row flex-col py-5 md:px-5 px-2 sm:items-start items-center">
      {/* LEFT SECTION */}
      <section className="h-auto sm:w-1/2 xs:w-4/5 w-full">
        <div className="px-5 py-10 flex flex-col sm:items-start justify-start items-center">
          <h1 className="md:text-6xl text-4xl uppercase font-semibold bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] bg-clip-text text-transparent">
            contact me
          </h1>
          <p className="bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] bg-clip-text text-transparent md:text-2xl text-xl py-4">
            You can also contact me with
          </p>
          <div className="flex gap-5">
            <span className="relative h-8 w-8 inline-block overflow-hidden">
              <a href="https://www.linkedin.com/in/muhammad-fasih-99023b314/" className="absolute h-full w-full" target="_blank"></a>
              <FaLinkedin className="h-full w-full bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] rounded-sm" />
            </span>
            <span className="relative h-8 w-8 inline-block overflow-hidden">
            <a href="https://www.facebook.com/" className="absolute h-full w-full" target="_blank"></a>
              <FaFacebookSquare className="h-full w-full bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] rounded-sm" />
            </span>
            <span className="relative h-8 w-8 inline-block overflow-hidden">
            <a href="https://www.instagram.com/itz._.fasih_/?__pwa=1" className="absolute h-full w-full" target="_blank"></a>
              <FaInstagram className="h-full w-full bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] rounded-sm" />
            </span>
          </div>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="h-auto sm:w-1/2 xs:w-4/5 w-full py-10 text-white ">
        <div className="h-full md:w-[90%] px-0 py-[4px] w-full bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] flex items-center justify-center rounded-lg">
          <form
            onSubmit={sumbitHandler}
            className="h-[98.5%] w-[98.5%] bg-zinc-900 rounded-lg px-10 py-6 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xl capitalize font-semibold"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(data) => setName(data.target.value)}
                required
                className="rounded-md h-14 w-full bg-zinc-800 px-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className=" text-xl capitalize font-semibold"
              >
                email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(data) => setEmail(data.target.value)}
                required
                className="rounded-md h-14 w-full bg-zinc-800 px-2 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className=" text-xl capitalize font-semibold"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                value={msg}
                onChange={(data) => setMsg(data.target.value)}
                required
                className="rounded-md sm:h-32 h-24 w-full bg-zinc-800 px-2 py-1"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-sm mt-2 h-10 w-28 rounded-md text-zinc-900 font-bold bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] uppercase flex gap-2 items-center justify-center overflow-hidden"
                onMouseEnter={() => setbtnHover(true)}
                onMouseLeave={() => setbtnHover(false)}
                type="submit"
              >
                <h3>send</h3>
                <span className="h-5 w-5 flex items-center justify-center">
                  <MdSend
                    className={`h-full w-full ${
                      btnHover && "scale-125 duration-300"
                    }  ${btnClick && "translate-x-20 opacity-0 duration-700"}`}
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
