"use client"
import React, { useEffect, useRef, useState } from "react";
interface cardType {
  heading: string;
  subHeading: string;
  firstPoint: string;
  secondPoint: string;
  thirdPoint: string;
}
const cardDataArray: cardType[] = [
  {
    heading: "Front End Development",
    subHeading: "at GIAIC",
    firstPoint: "Completed front-end tasks using HTML, CSS, and JavaScript.",
    secondPoint: "Built responsive layouts with Flexbox and Grid.",
    thirdPoint: "Debugged JavaScript to enhance site functionality.",
  },
  {
    heading: "Generative AI",
    subHeading: "at PIAIC",
    firstPoint: "Learning foundational concepts of Generative AI.",
    secondPoint: "Exploring deep learning models and their applications.",
    thirdPoint: "Building AI-driven solutions through hands-on projects.",
  },
  {
    heading: "Education",
    subHeading: "Intermediate in Pre-Engineering",
    firstPoint: "Completed intermediate education in Pre-Engineering.",
    secondPoint: "Studied at Delhi College.",
    thirdPoint: "Participated in science fairs and engineering projects, enhancing problem-solving skills.",
  },
  {
    heading: "Religious Education",
    subHeading: "Hifz Education",
    firstPoint: "Memorized the Holy Quran at Jamia Ashraf ul Madaris, Karachi.",
    secondPoint: "Studied under qualified scholars focusing on Tajweed.",
    thirdPoint: "Participated in regular review sessions for retention.",
  }
];

const About = () => {
const [animate, setAnimate] = useState(false);
const aboutRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true); 
      }else{
        setAnimate(false)
      }
    },
    { threshold: 0.1 } 
  );

  if (aboutRef.current) {
    observer.observe(aboutRef.current);
  }

  return () => {
    if (aboutRef.current) {
      observer.unobserve(aboutRef.current);
    }
  };
}, []);
const cardStructure = (cardData:cardType) => {
  return (
    <div className="h-full w-full py-3 px-7 text-white/80 flex flex-col gap-2  ">
   <h2 className="capitalize font-bold text-xl leading-none bg-gradient-to-b from-[#DBB187] via-[#FDFEBA] to-[#DBB187] bg-clip-text text-transparent mt-[2vw]">{cardData.heading}</h2>
  <h3 className="capitalize font-semibold text-white/40">{cardData.subHeading}</h3>
  <ul className="list-disc text-sm flex flex-col gap-3">
    <li>{cardData.firstPoint}</li>
    <li>{cardData.secondPoint}</li>
    <li>{cardData.thirdPoint}</li>
  </ul>
  </div>
)
}
  return (
    <div  ref={aboutRef} className="relative h-auto w-full bg-zinc-900 flex flex-col items-center justify-center pb-32 pt-12">
      <h1 className="bg-gradient-to-b from-[#DBB187] via-[#FDFEBA] to-[#DBB187] bg-clip-text text-transparent sm:text-[7.5vw] text-[12vw] uppercase font-semibold pb-[3vw] w-full sm:text-center text-start px-4">about me</h1>
      <div className="relative h-full mmd:w-3/4 md:w-[85%] w-[98%] flex flex-col gap-8">
        <div className="line absolute top-1/2 sm:left-1/2 xs:left-20 left-10 -translate-x-1/2 -translate-y-1/2 h-full w-1 bg-gradient-to-b from-[#DBB187] via-[#FDFEBA] to-[#DBB187]"></div>

        {[cardStructure(cardDataArray[0]),cardStructure(cardDataArray[1]),
          cardStructure(cardDataArray[2]),cardStructure(cardDataArray[3])
        ].map((val, ind) => {
          return (
            <section
              key={ind}
              className={`relative xxs:h-64 h-auto w-full flex ${
                ind % 2 == 0 ? "flex-row" : "sm:flex-row-reverse flex-row"
              }  items-start justify-start mt-20`}
            >
              {/* BOX */}
              <div className={`BOX relative overflow-hidden h-full sm:w-[40%] xs:w-3/5 w-[70%] sm:ml-0 xs:ml-40 ml-[25vw] bg-zinc-800 rounded-md duration-1000 ${animate ? "translate-x-0 opacity-100" : `${ ind % 2 == 0 ? "-translate-x-20" : "translate-x-20"}  opacity-0`}`}>
                <div className="BOTTOMLINE absolute bottom-0 w-full h-1 bg-gradient-to-b from-[#DBB187] via-[#FDFEBA] to-[#DBB187]"></div>
                {val}
              </div>

              {/* CIRCLE */}
              <div className={`CIRCLE absolute bottom-1/2 sm:left-1/2 xs:left-10 left-3 sm:-translate-x-1/2 translate-x-0 -translate-y-[60%] rounded-full bg-gradient-to-b from-[#DBB187] via-[#FDFEBA] to-[#DBB187] z-10 flex items-center justify-center duration-1000 ${animate ? "xs:h-20 h-14 xs:w-20 w-14" : "xs:h-14 h-8 xs:w-14 w-8"}`}>
                <div className="INNERCIRCLE h-[90%] w-[90%] rounded-full bg-zinc-900 cursor-pointer"
                onClick={() => setAnimate(!animate)}
                ></div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default About;
