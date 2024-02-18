import Link from "next/dist/client/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Draggable from "react-draggable";
import SkillButtons from "./SkillButton";

export default function GlassButton() {
  const [onHover, setOnHover] = useState(false);
  const [onHover1, setOnHover1] = useState(false);
  const [onHover2, setOnHover2] = useState(false);
  const arrow = "→  ";
  return (
    <div className=" ">
      {/*  */}
      {/* <div
        style={{
          top: "25vh",
          left: "3vw",
          filter:
            "hue-rotate(330deg) contrast(1.25) drop-shadow( .05vw .05vw 0.05vw yellow)",
        }}
        className={
          onHover1
            ? " opacity-80 absolute w-64 h-64 z-50 rounded-full  mix-blend-multiply"
            : "opacity-0 absolute  hidden"
        }
      >
        <Image
          className="rounded-full object-cover "
          src="/jexica-img.png"
          width={200}
          height={200}
          alt="jexica"
          layout="responsive"
        />
      </div> */}

      {/*  */}
      <div className=" lg:h-screen md:h-full sm:h-full grid lg:grid-cols- md:grid-cols-2 sm:grid-cols-1 gap-3  place-items-center w-full px-5  lg:px-48 md:px-16 sm:px-10 py-16 ">
        {/*  */}

        <div className="grid grid-cols-1 gap-4  h-full place-self-end ">
          {/*  */}
          <Draggable>
            <div className=" cursor-move w-full backdrop-blur-3xl text-2xl place-self-end ">
              <div
                onMouseEnter={() => setOnHover1(true)}
                onMouseLeave={() => setOnHover1(false)}
                style={{ lineHeight: "1px" }}
                // style={onHover1 ? { fontFamily: "Mr Pixel" } : null}
                className=" w-full animate-fadein-02 text-right py-10   bg-gradient01  mix-blend-overlay flex rounded-3xl bg-cover bg-left-top  "
              >
                <p className="text-indigo-900 w-full text-right text-7xl lg:text-8xl md:text-8xl sm:text-7xl  px-6 mix-blend-overlay font-whyteinktrap ">
                  <p>jexica</p>
                  {/* <p>ayran</p> */}
                </p>
              </div>
            </div>
          </Draggable>
          {/*  */}

          <Draggable>
            <div
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              // style={
              //   onHover ? { filter: "drop-shadow( .45vw .45vw 0 black)" } : null
              // }
              className=" cursor-pointer place-items-start animate-fadein-02  rounded-3xl bg-cover bg-right-top bg-gradient04 hover:text-indigo-700 px-5 pb-3 pt-10 text-3xl tracking-wide text-left  text-black   "
            >
              <p className="  grid grid-cols-1 place-items-center justify-center">
                <Link href="/developer" passHref>
                  <div className="px-0 lg:px-7 md:px-5 sm:px-0 text-5xl mix-blend-overlay filter leading-12  font-whytemono">
                    Creative Developer
                  </div>
                </Link>
                <div className="flex flex-row flex-wrap pt-2 justify-end">
                  <div className=" text-3xl pr-1 pt-3 animate-bounce-slow text-yellow-300 ">
                    {arrow}
                  </div>
                  <p className=" mt-1 z-40 flex justify-around  text-white rounded-full py-1 px-3 whitespace-nowrap font-bold tracking-wide bg-trp border  text-2xl font-whytemono  border-black">
                    <div
                      className="w-36"
                      onMouseEnter={() => setOnHover(true)}
                      onMouseLeave={() => setOnHover(false)}
                    >
                      <Link href="/developer" passHref>
                        <a className=" hover:no-underline hover:text-yellow-300">
                          <Marquee
                            style={{ textAlign: "center" }}
                            direction="right"
                            className="overflow-hidden p-1 "
                            gradient={null}
                            speed={15}
                          >
                            projects&nbsp;
                          </Marquee>
                        </a>
                      </Link>
                    </div>
                  </p>
                </div>
              </p>
            </div>
          </Draggable>
          {/*  */}

          {/*  */}
          {/* second grid  */}
        </div>
        {/*  */}

        <Draggable>
          <div
            onMouseEnter={() => setOnHover2(true)}
            onMouseLeave={() => setOnHover2(false)}
            // style={
            //   onHover2 ? { filter: "drop-shadow( .45vw .45vw 0 black)" } : null
            // }
            className="cursor-move place-self-end  animate-fadein-02 flex px-7 py-12  h-fit rounded-3xl bg-cover bg-right-top bg-gradient06 "
          >
            <div className="text-xl tracking-wide text-left  text-black font-whytemono selection:bg-fuchsia-300 selection:text-fuchsia-900 ">
              Hello, <br className="mb-3" />
              I’m{" "}
              <span className=" font-whyteinktrap  text-red-400 tracking-wider">
                Jessica Ayran
              </span>{" "}
              (jexica), a{" "}
              <span className=" font-monument text-red-400 ">designer</span> and{" "}
              <span className=" font-monument  text-red-400 ">
                web developer{" "}
              </span>
              from the SF Bay Area. A budding programmer excited to learn new
              languages, frameworks, and UI tools.
              <p className="mt-3 text-sm">
                <span className="text-yellow-300">&#10022;</span> California
                College of the Arts, SF, CA: Bachelor of Architecture, 2016.
              </p>
              <p className="mt-3 text-sm">
                <span className="text-yellow-300">&#10022;</span> General
                Assembly, NYC - Remote: Software Engineering Immersive, 2021.
                <span className="mt-3 block">
                  <span className="text-yellow-300 ">&#10022;&nbsp;</span>
                  HTML, CSS, Javascript, ReactJS, NextJS, Node, Ruby,
                  RubyonRails, Postgresql, MongoDB, Express, Python, Java,
                  TailwindCSS, Bootstrap, MaterialUI.
                  <div>
                    <p className="mt-2">
                      <span className="text-yellow-300">&#10022;&nbsp;</span>
                      <Link className="" href="mailto:jexica.ayran@gmail.com">
                        <a className="text-sm underline">email me</a>
                      </Link>
                      &nbsp;
                      <Link
                        href="https://drive.google.com/file/d/1vNq72WyHiFver28D86C2fiV1UcFhW04W/view?usp=sharing"
                        passHref
                      >
                        <a className="underline text-sm" target="_blank">
                          resume
                        </a>
                      </Link>
                    </p>
                  </div>
                </span>
              </p>
            </div>
          </div>
        </Draggable>
        {/*  */}
        {/* <SkillButtons /> */}

        {/*  */}
      </div>
    </div>
  );
}
