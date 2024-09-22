import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import MyBox from "./myBox";

const skills = [
  { name: "html", img: "./html.png",percentage:95, },
  { name: "css", img: "./css.png",percentage:90, },
  { name: "typescript", img: "./ts.png",percentage:98, },
  { name: "python", img: "./py.png",percentage:90, },
  { name: "javascript", img: "./js.png",percentage:96, },
  { name: "tailwind css", img: "./tailwind.png",percentage:94, },
  { name: "react js", img: "./react.png",percentage:88, },
  { name: "next js", img: "./next.png",percentage:85, },
  { name: "three js", img: "./three.png", percentage:70},
];

const Skills = () => {
  const [fov, setFov] = useState(30);
  const [url, setUrl] = useState("./three.png");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if(width < 640) setFov(25)
      else if (width < 640) setFov(20);
      else if (width < 700) setFov(45);
      else if (width < 850) setFov(40);
      else if (width < 1000) setFov(35);
      else setFov(30);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const switchImage = (imgUrl: string) => {
    setUrl(imgUrl);
  };

  return (
    <div id="skills" className="h-auto w-full">
      <h1 className="sm:translate-y-16 translate-y-0 pt-5 bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] bg-clip-text text-transparent w-full text-center uppercase font-semibold sm:text-[6vw] text-[18vw]">skills</h1>
    <div className="relative h-auto w-full flex sm:flex-row flex-col-reverse">
      {/* LEFT SECTION */}
      <section className="relative h-auto sm:w-[70%] w-full flex items-end pb-10">
        <div className="relative h-[80%] w-full py-6 flex flex-wrap items-end sm:justify-normal justify-center">
          {skills.map((skill, ind) => (
            <div key={skill.name} className="h-24 w-56 px-1 py-3 text-white mx-6">
              <div className="flex gap-2 w-full items-end">
                <span
                  className="icon h-6 w-6 bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => switchImage(skill.img)}
                >
                  <IoMdCheckboxOutline className="h-3/5 w-3/5 text-zinc-900" />
                </span>
                <h2 className="uppercase font-semibold text-md">{skill.name}</h2>
              </div>
              <div className="relative">
                <div className="relative h-[5px] w-full bg-white rounded-full mt-3">
                  <span
                    className="absolute inline-block top-0 left-0 h-full bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></span>
                </div>
                <h2 className="absolute right-0 font-semibold">{skill.percentage}%</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RIGHT SECTION */}
      <div className="relative sm:h-screen h-[50vh] sm:w-[30%] w-full sm:pr-10 overflow-hidden flex justify-center">
        <div className="absolute h-1/2 sm:w-[90%] w-[50%] sm:bottom-28 bottom-0 bg-[url('/stand.png')] bg-no-repeat bg-bottom bg-contain"></div>
        <Canvas camera={{ fov, position: [10, 0, 0] }}>
          <MyBox url={url} />
        </Canvas>
      </div>
    </div>
    </div>
  );
};

export default Skills;
