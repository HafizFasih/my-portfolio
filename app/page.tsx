"use client";
import Laptop from "@/components/Laptop";
import Main from "@/components/Main";
import React, { useState } from "react";

const Home = () => {

  const [displaySwitch, setDisplaySwitch] = useState(false);

  const output:React.JSX.Element = displaySwitch ?
  <Main/>
  :
  <Laptop disChange={setDisplaySwitch}/>

  return (
    <div className="w-full bg-zinc-900">
     {output}
    </div>
  );
};

export default Home;
