"use client";
import Laptop from "@/components/Laptop";
import Main from "@/components/Main";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [displaySwitch, setDisplaySwitch] = useState(false);

  const output: React.JSX.Element = displaySwitch ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 10 }}
      className="overflow-hidden"
    >
      <Navbar/>
      <Main />
    </motion.div>
  ) : (
    <Laptop disChange={setDisplaySwitch} />
  );

  return <div className="w-full bg-zinc-900">{output}</div>;
};

export default Home;
