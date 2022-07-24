import React from "react";

export default function GlassButton() {
  return (
    <div className="w-screen relative">
      <div className="z-10 text-2xl py-20 bg-gradient-1 w-screen  flex  flex-col lg:flex-row md:flex-col sm:flex-col justify-center">
        <div className="">
          {/* <div className=" mx-5 mt-10  w-96">
            <p className=" flex justify-around text-white rounded-full py-5 px-14 whitespace-nowrap font-bold tracking-wider bg-black text-3xl font-whytemono">
              web development
            </p>
          </div>
          <div className=" mx-5  mt-5  w-96 h-24 ">
            <p className="border-2  flex justify-around rounded-full py-5 px-14 whitespace-nowrap  tracking-wider bg-yellow text-3xl font-ginto font-normal">
              design :creative
            </p>
          </div> */}

          <div className="pl-10  text-black text-left py-10 px-30 mx-5  mb-7  flex justify-around rounded-3xl bg-right-top bg-gradient01 animate-movebg w-96 h-64 bg-cover filter">
            <p className="name-logo pr-5 text-5xl font-whyteinktrap">
              {" "}
              Creative Developer
            </p>
          </div>
          <div className=" text-right py-10 px-30 mx-5  mb-7  w-96 h-72  flex justify-around rounded-3xl bg-cover bg-right-bottom bg-opacity-50 bg-gradient01 animate-movebg">
            <p className="name-logo pr-5 text-8xl font-whyteinktrap">
              {" "}
              jexica ayran
            </p>
          </div>
        </div>
        <div className=" mx-5 p-10 top-0 left-0  relative  w-96 border border-black rounded-3xl">
          <div className=" w-full z-10">
            <p className="text-3xl tracking-wide text-left font-whytemono ">
              Hello, <br className="mb-3" />
              I’m a creative developer, specializing in React/MERN tech stack,
              Java, and web to product design. <br className="mb-3" />
              Based in NYC + Open to remote work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
