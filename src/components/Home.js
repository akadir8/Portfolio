import React from "react";
import Image from "./assets/photo.JPG"
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center text-center space-y-8 overflow-hidden">
        <div
          className="relative flex justify-center items-center"
          style={{ opacity: 1, borderRadius: "20%", transform: "none" }}
        >
          <div className="absolute border border-[#555555] rounded-full h-[200px] w-[200px] mt-48 animate-ping"></div>
          <div className="absolute border border-[#555555] rounded-full h-[300px] w-[300px] mt-48 animate-ping"></div>
          <div className="absolute border border-[#555555] rounded-full h-[500px] w-[500px] mt-48 animate-ping"></div>

          <div className="absolute border border-indigo-700 dark:border-[#ca3131] opacity-20 rounded-full h-[650px] w-[650px] mt-48 animate-pulse"></div>
          <div className="absolute border border-[#555555] rounded-full h-[800px] w-[800px] mt-48 animate-pulse"></div>
          <img
            src={Image}
            width={"130px"}
            height={"130px"}
            className="rounded-full"
            loading="lazy"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="z-20">
          <h2 className="text-sm uppercase dark:text-gray-300 pb-3 tracking-[12px]">
            <TypeAnimation
              sequence={[
                "Senior Golang Backend Developer",
                4000,
                "Senior Software Engineer",
                4000,
                "Embedded Software Developer",
                4000,
              ]}
              speed={50}
              className="text-gray-700"
              wrapper="span"
              repeat={Infinity}
            />
          </h2>
          <h1 className="text-4xl text-indigo-900 dark:text-red-500 lg:text-6xl font-semibold px-8">
            <TypeAnimation
              sequence={[
                "Hi,I'm Hüsamettin",
                4000,
                "This is my portfolio",
                4000,
                "From Ankara/Turkey",
                4000,
              ]}
              speed={50}
              className="text-gray-700"
              wrapper="span"
              repeat={Infinity}
            />
          </h1>
          <div className="pt-6">
            <a href="/#about">
              <button className="heroButton text-[#626974] hover:text-black dark:text-gray-100 dark:hover:text-gray-500">About</button>
            </a>
            <a href="/#skills">
              <button className="heroButton text-[#626974] hover:text-black dark:text-gray-100 dark:hover:text-gray-500">Skills</button>
            </a>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
