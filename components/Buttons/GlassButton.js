import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export default function GlassButton() {
  const [onHover, setOnHover] = useState(false);
  const arrow = "→  ";
  return (
    <div className="w-screen relative">
      <div className="z-10 text-2xl pt-16 bg-gradient-1 w-screen  flex  flex-col lg:flex-row md:flex-col sm:flex-col justify-center">
        <div className="">
          <div className="pl-7  text-black text-left py-10 px-30 mx-5  mb-7  flex justify-around rounded-3xl bg-right-top bg-gradient01 animate-movebg w-96 h-60 bg-cover filter">
            <p className="name-logo  text-6xl font-whyteinktrap">
              Creative Developer
              <div className="flex flex-row hover:animate-bounce pt-3 pr-7 justify-end">
                <div className=" text-3xl pr-5 pt-3 animate-bounce-slow">
                  {arrow}
                </div>
                <p className=" w-48 z-50 hover:animate-bounce hover:text-red flex justify-around text-white rounded-full py-2 px-10 whitespace-nowrap font-bold tracking-wider bg-trp border text-2xl font-whytemono">
                  <div
                    className=" w-44"
                    onMouseEnter={() => setOnHover(true)}
                    onMouseLeave={() => setOnHover(false)}
                  >
                    <Marquee
                      direction="right"
                      className="overflow-hidden p-1"
                      gradient={null}
                      speed={onHover ? 40 : 20}
                    >
                      projects
                    </Marquee>
                  </div>
                </p>
              </div>
            </p>
          </div>
          <div className=" text-right py-10 px-30 mx-5  mb-7  w-96  flex justify-around rounded-3xl bg-cover bg-right-bottom bg-opacity-50 bg-gradient01 h-60">
            <p className="name-logo pr-3 pb-3 text-8xl font-whyteinktrap leading-5">
              {" "}
              jexica ayran
            </p>
          </div>
        </div>
        <div className="flex mx-5 p-10 top-0 left-0  relative w-96 h-128 border border-black rounded-3xl">
          <div className="text-3xl tracking-wide text-left font-whytemono pb-0">
            Hello, <br className="mb-3" />
            I’m a web developer, specializing in React (MERN), Java, and design
            technologies. <br className="mb-3" />
            Based in NYC + Open to remote work.
          </div>
        </div>
      </div>
    </div>
  );
}
