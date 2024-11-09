"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
const linkArr: string[] = ["/home", "/about", "/skills", "/projects", "/contact"];

const Navbar = () => {
  const [index, setIndex] = useState<number>(-1);
  const [display, setDisplay] = useState(false);
  const [slide, setSlide] = useState(false);
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      setScrollingDown(currentScrollTop > lastScrollTop);
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);


  const animationHandler = () => {
    setSlide(!slide);
    display && setDisplay(false);
    !display && setTimeout(() => setDisplay(true), 500);
  };

  const options = ["home", "about", "skills", "projects", "contact"].map(
    (val, ind) => (
      <li
        key={ind}
        className="relative uppercase text-sm font-semibold h-[45px] flex items-end justify-start pb-1 cursor-pointer bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] bg-clip-text text-transparent"
        onMouseEnter={() => setIndex(ind)}
        onMouseLeave={() => setIndex(-1)}
      >
        <Link href={linkArr[ind]}
        onClick={() => {
          setSlide(false);
          display && setDisplay(false);
        }}
        >{val}</Link>

        <div
          className="h-[2px] duration-300 bottom-0 bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] absolute"
          style={{
            width: index === ind ? `${val.length <= 6 ? 50 : 65}px` : `0px`,
          }}
        ></div>
      </li>
    )
  );

  return (
    <div className="overflow-hidden">
      <div
        className={`fixed z-[1000] w-full h-16 px-10 flex items-center justify-between backdrop-blur-glass border-b-[0.5px] border-[#3C4144] duration-500  ${
          scrollingDown ? "-translate-y-16" : "translate-y-0"
        } `}
      >
        <div className="logo relative h-10 w-10 bg-center bg-[url('/cr.png')] bg-no-repeat bg-cover">
          <Link href="/home" className="absolute h-full w-full cursor-pointer"></Link>
        </div>
        <ul className="sm:flex hidden text-white h-full items-start gap-12">
          {options}
        </ul>
        <div
          className="sm:hidden inline-block box bg-[url('/menu.svg')] bg-cover bg-no-repeat bg-center h-8 w-8 rounded-sm cursor-pointer"
          onClick={() => animationHandler()}
        ></div>
        <ul
          className={`absolute right-0 top-16 w-28 bg-zinc-800 font-bold flex flex-col items-center justify-start rounded-bl-md duration-500 ${
            slide ? "h-60" : "h-0"
          }`}
        >
          {display && options}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
