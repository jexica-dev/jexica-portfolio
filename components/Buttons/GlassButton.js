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
    <div className=" cursor-star">
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
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  place-items-center w-full h-full px-20 py-16 ">
        {/*  */}

        <div className="grid grid-cols-1 gap-3  h-full place-self-end ">
          {/*  */}
          <Draggable>
            <div className=" backdrop-blur-3xl z-10 text-2xl place-self-end ">
              <div
                onMouseEnter={() => setOnHover1(true)}
                onMouseLeave={() => setOnHover1(false)}
                // style={
                //   onHover1 ? { filter: "drop-shadow( .45vw .45vw 0 black)" } : null
                // }
                className=" w-full animate-fadein-02 text-right py-10 px-30  bg-gradient01  mix-blend-overlay flex rounded-3xl bg-cover bg-left-top  "
              >
                <p
                  style={{ fontSize: "5.25rem" }}
                  className=" text-indigo-900 px-5 pl-3 mix-blend-overlay  tracking-wide  leading-15  font-whyteinktrap font-bold  "
                >
                  jexica ayran
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
              className="place-items-start animate-fadein-02  rounded-3xl bg-cover bg-right-top bg-gradient04 hover:text-indigo-700 px-10 pb-3 pt-10 text-3xl tracking-wide text-left  text-black   "
            >
              <p className="">
                <span className=" text-5xl mix-blend-overlay filter leading-12  font-whytemono">
                  Creative Developer
                </span>
                <div className="flex flex-row flex-wrap pt-2 justify-end">
                  <div className=" text-3xl pr-2 pt-3 animate-bounce-slow text-yellow-300 ">
                    {arrow}
                  </div>
                  <p className=" mt-1 z-40 flex justify-around  text-white rounded-full py-1 px-5 whitespace-nowrap font-bold tracking-wide bg-trp border  text-2xl font-whytemono  border-black">
                    <div
                      className=" w-44"
                      onMouseEnter={() => setOnHover(true)}
                      onMouseLeave={() => setOnHover(false)}
                    >
                      <Link href="/work" passHref>
                        <a className=" hover:no-underline hover:text-yellow-300">
                          <Marquee
                            style={{ textAlign: "center" }}
                            direction="right"
                            className="overflow-hidden p-1 "
                            gradient={null}
                            speed={30}
                            pauseOnHover
                          >
                            projects
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
            className="place-self-end  animate-fadein-02 flex p-10  h-fit rounded-3xl bg-cover bg-right-top bg-gradient06 "
          >
            <div className="text-xl tracking-wide text-left  text-black font-whytemono selection:bg-fuchsia-300 selection:text-fuchsia-900 ">
              Hello, <br className="mb-3" />
              I’m{" "}
              {/* <span className=" font-whyteinktrap  text-red-400 tracking-wider">
                Jexica Ayran
              </span> */}
              a <span className=" font-monument text-red-400 ">designer</span>{" "}
              and{" "}
              <span className=" font-monument  text-red-400 ">
                web developer{" "}
              </span>
              originally from the SF Bay Area and now currently residing in NYC.
              <p className="mt-3 text-base">
                <span className="text-yellow-300">&#10022;</span> California
                College of the Arts (SF, CA):
                <br /> Bachelor of Architecture, 2016.
              </p>
              <p className="mt-3 text-base">
                <span className="text-yellow-300">&#10022;</span> General
                Assembly: Software Engineering Immersive, 2021.
                <span className="mt-3 block">
                  * Available for freelance and remote work.
                </span>
              </p>
            </div>
          </div>
        </Draggable>
        {/*  */}
        <SkillButtons />

        {/*  */}
      </div>
    </div>
  );
}
