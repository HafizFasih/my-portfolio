import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import LaptopModel from "./LaptopModel";

const Laptop = ({disChange}:any) => {
  
  const [dispaly, setDispaly] = useState(false);
  const [fov, setFov] = useState<number>(12);
  const [expand, setExpand] = useState(false);
  const [width, setWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setFov(window.innerWidth < 400 ? 20 : 12);
      window.innerWidth > 400 && window.innerWidth < 900 && setFov(16);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animationHandler = () => {
    setTimeout(() => {
      setWidth(true);
      setTimeout(() => {
        disChange(true);
      }, 1000);
    }, 1400);
  };

  return (
    <div className="mainBox relative w-full bg-[url('../public/bg.jpeg')] bg-no-repeat bg-center bg-cover overflow-hidden flex items-center justify-center duration-500">
      {/* WIDTH */}
      <div className="parentContainer relative h-screen w-full flex items-center justify-center">
        {/* DISPLAY */}
        <div className="container relative h-screen w-full flex items-center justify-center">
          <div className="absolute top-20 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center px-5">
            <h1 className="uppercase txt tracking-tighter text-zinc-400 md:text-[5vw] text-[8vw]  font-bold leading-none">
              welcome to my portfolio
            </h1>
          </div>

          {/* BUTTON */}
          <div
            className={`z-10 absolute xxs:top-[72%] top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase backdrop-blur-glass sm:py-2 py-[4px] px-2 rounded-xl shadow-btn text-black font-semibold sm:text-sm text-[8px] cursor-pointer opacity-65 ${
              dispaly && !expand ? "inline-block" : "hidden"}`}
            onClick={() => {
              setExpand(true);
              animationHandler();
            }}>
          get started
          </div>
          <Canvas camera={{fov: fov,position: [0, 5, 220],}}>
            <Environment files={["./light.exr"]} />
            <ScrollControls style={{ opacity: 0 }}>
            <LaptopModel setDis={setDispaly} close={expand} />
            </ScrollControls>
          </Canvas>
        </div>
      </div>
      <div className={`absolute right-0 h-screen duration-700 ${ width ? "w-full" : "w-0"} bg-zinc-900`}></div>
    </div>
  );
};

export default Laptop;
