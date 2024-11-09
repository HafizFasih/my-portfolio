"use client"
import React, { useEffect, useState } from "react";

const Seperator = () => {
    const [animate, setAnimate] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      setAnimate(currentScrollTop > lastScrollTop);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);


  return (
    <div className="relative h-[15vh] w-full bg-zinc-900 overflow-hidden">
      <div className="pic z-10 absolute w-full h-full top-0 left-0 bg-[url('/final.png')] bg-no-repeat bg-center bg-cover"></div>
        <div
          className={`color bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] absolute h-1/2 w-full top-0 right-0 ${animate ? "-translate-x-full" : "translate-x-full"} duration-[3s]`}
        ></div>
        <div
          className={`color bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] absolute h-1/2 w-full bottom-0 left-0 ${animate ? "translate-x-full" : "-translate-x-full"} duration-[3s]`}
        ></div>
    </div>
  );
};

export default Seperator;
