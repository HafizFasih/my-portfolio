import React from "react";

const HomePage = () => {
  return (
    <div id="home" className="w-full h-auto bg-zinc-900 mt-16 text-white flex sm:flex-row flex-col-reverse overflow-hidden">
      {/* LEFT SECTION */}
      <div className="sm:w-2/4 w-full py-16 xxs:px-8 px-4 tracking-tighter overflow-hidden">
        <h1 className="mmd:text-5xl sm:text-4xl xs:text-5xl text-3xl tracking-tighter capitalize font-semibold leading-none">
          Hi,<br></br> I'm Muhammad Fasih
        </h1>
        <h2 className="mmd:text-4xl sm:text-3xl xs:text-4xl text-3xl xxs:text-3xl tracking-tighter capitalize py-2 font-semibold leading-none bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] bg-clip-text text-transparent">
          fullstack developer
        </h2>
        <p className="my-4">
        I'm a full-stack developer passionate about building modern web applications using TypeScript, JavaScript, HTML, CSS, React, and Next.js. Currently enhancing my skills while working on diverse web projects.
        </p>
        <button className="relative sm:my-8 my-3 text-sm py-3 px-5 rounded-md text-zinc-900 font-semibold bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] uppercase">
          view cv
          <a href="https://hackerthon-milestone-04.vercel.app" className="z-10 absolute h-full w-full top-0 left-0" target="_blank"></a>
        </button>
      </div>
      {/* RIGHT SECTION */}
      <div className="relative sm:w-2/4 w-full flex justify-center h-auto overflow-hidden">
          <div className="sm:absolute relative sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 mmd:h-96 xs:h-64 xxs:h-48 h-32 mmd:w-96 xs:w-64 xxs:w-48 w-32 sm:mt-0 mt-5 rounded-full overflow-hidden bg-gradient-to-r from-[#DBB187] via-[#FDFEBA] to-[#DBB187] flex items-center justify-center">
            <div className=" h-[97%] w-[97%] rounded-full bg-no-repeat bg-right bg-cover bg-[url('/pic.jpg')]">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
