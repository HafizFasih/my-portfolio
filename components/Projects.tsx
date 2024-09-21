import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const cardArray = [
  "h-[75vh] z-50 opacity-100 -translate-x-[50%] ",
  "h-[65vh] z-40 opacity-40 md:-translate-x-[65%] -translate-x-[60%]",
  "h-[55vh] z-40 opacity-20 md:-translate-x-[75%] -translate-x-[70%]",
  "h-[55vh] z-30 opacity-20 md:-translate-x-[25%] -translate-x-[30%]",
  "h-[65vh] z-30 opacity-40 md:-translate-x-[35%] -translate-x-[40%]",
];

const cardData = [
    {
        bgURl:"bg-[url('/todo.jpeg')]",
        name:"todo list",
        gitHubLink: "https://github.com/HafizFasih/myTodoApp.git",
        linkedinLink: "https://www.linkedin.com/posts/muhammad-fasih-99023b314_thrilled-to-unveil-my-latest-project-activity-7231305969228533760-_CTo?utm_source=share&utm_medium=member_desktop",
    },
    {
        bgURl:"bg-[url('/password.png')]",
        name:"password generator",
        gitHubLink: "https://github.com/HafizFasih/Password-generator.git",
        linkedinLink: "https://www.linkedin.com/posts/muhammad-fasih-99023b314_i-started-watching-a-nextjs-and-react-tutorial-activity-7231707615636918272-db1X?utm_source=share&utm_medium=member_desktop",
    },
    {
        bgURl:"bg-[url('/countdown.jpg')]",
        name:"countdown timer",
        gitHubLink: "https://github.com/HafizFasih?tab=repositories",
        linkedinLink: "https://www.linkedin.com/posts/muhammad-fasih-99023b314_day-1-of-30-days-nextjs-project-challenge-activity-7237043649132335104-kHkE?utm_source=share&utm_medium=member_desktop",
    },
    {
        bgURl:"bg-[url('/clone.jpg')]",
        name:"ochi.design clone",
        gitHubLink: "https://github.com/HafizFasih?tab=repositories",
        linkedinLink: "https://www.linkedin.com/posts/muhammad-fasih-99023b314_website-clone-complete-i-successfully-activity-7241122247845777408-TKxP?utm_source=share&utm_medium=member_android",
    },
    {
        bgURl:"bg-[url('/weather.avif')]",
        name:"weather app",
        gitHubLink: "https://github.com/HafizFasih/weatherApp.git",
        linkedinLink: "https://www.linkedin.com/posts/muhammad-fasih-99023b314_day-2-of-30-days-nextjs-challenge-weather-activity-7238104520646406146-A1ZV?utm_source=share&utm_medium=member_desktop",
    },
]

const Projects = () => {
  const [shifter, setshifter] = useState([0, 1, 2, 3, 4]);
  const [hover, setHover] = useState(false);
  const commonClass =
    " absolute md:w-[35vw] sm:w-[60vw] w-[80vw] left-1/2 sm:top-1/2 xs:top-[55%] top-1/2 -translate-y-1/2 bg-zinc-800 duration-700 flex items-end justify-center bg-no-repeat bg-cover bg-center overflow-hidden ";
  for (let i = 0; i < cardArray.length; i++) cardArray[i] += commonClass;

  const moveLeft = () => {
    setshifter(shifter.map((val) => (val === 0 ? (val = 4) : (val -= 1))));
  };
  const moveRight = () => {
    setshifter(shifter.map((val) => (val === 4 ? (val = 0) : (val += 1))));
  };
  return (
    <div id="projects" className="relative sm:h-[130vh] h-[145vh] w-full bg-zinc-900 overflow-hidden">
        <h1 className="bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] bg-clip-text text-transparent sm:text-[8vw] text-[18vw] uppercase font-semibold w-full text-center">projects</h1>
      <button
        className="z-[100] absolute sm:top-1/2 xs:top-[55%] top-1/2 translate-y-64 translate-x-[20vw] left-[10%] sm:translate-x-1/2 sm:-translate-y-1/2 bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] sm:rounded-full rounded-xl"
        onClick={() => moveLeft()}
      >
        <span className="flex items-center justify-center h-14 w-14">
          <FaAngleLeft className="h-1/2 w-1/2 text-zinc-800" />
        </span>
      </button>
      <button
        className="z-[100] absolute sm:top-1/2 xs:top-[55%] top-1/2 translate-y-64 -translate-x-[20vw] right-[10%] sm:-translate-x-1/2 sm:-translate-y-1/2 bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] sm:rounded-full rounded-xl"
        onClick={() => moveRight()}
      >
        <span className="flex items-center justify-center h-14 w-14">
          <FaAngleRight className="h-1/2 w-1/2 text-zinc-800" />
        </span>
      </button>
      {shifter.map((val, ind) => (
        <div
          key={ind}
          className={`${cardArray[shifter[ind]]} ${shifter[ind] === 0 ? "rounded-none" : "rounded-xl"} ${cardData[ind].bgURl}`}
          onMouseEnter={() => shifter[ind] === 0 && setHover(true)}
          onMouseLeave={() => shifter[ind] === 0 && setHover(false)}
          onClick={() => shifter[ind] === 0 && setHover(val => !val)}
        >
          {/* BORDER LINE */}
          {shifter[ind] === 0 && (
            <>
              {["left-0", "right-0", "top-0", "bottom-0"].map((val, ind) => (
                <div
                  key={ind}
                  className={`${
                    ind <= 1 ? "h-full w-1" : "w-full h-1"
                  } absolute ${val} bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] z-[100]`}
                ></div>
              ))}
            </>
          )}

          {/* INNER CONTENT */}
          {hover && shifter[ind] === 0 && (
            <>
              <div
                className={`${
                  hover ? "opacity-100" : "opacity-0"
                } h-full w-full absolute bg-black/70 duration-200`}
              ></div>
              <div
                className={`h-auto w-full bg-zinc-800 duration-700 py-8 ${
                  hover ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div className="h-full w-full flex flex-col justify-start bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] bg-clip-text text-transparent py-4 items-center gap-3">
                  <h1 className="text-[3vw] font-semibold uppercase">{cardData[ind].name}</h1>
                  <div className="flex gap-4">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-no-repeat bg-center bg-cover bg-[url(/github.svg)] bg-[#FDFEBA]">
                    <a href={cardData[ind].gitHubLink} className="h-full w-full" target="_blank"></a>
                    </span>
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-no-repeat bg-center bg-contain bg-[url(/linkedin.svg)] bg-[#FDFEBA]">
                    <a href={cardData[ind].linkedinLink} className="h-full w-full" target="_blank"></a>
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
