import Link from "next/dist/client/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function GlassButton() {
  const [onHover, setOnHover] = useState(false);
  const [onHover1, setOnHover1] = useState(false);
  const [onHover2, setOnHover2] = useState(false);
  const arrow = "→  ";
  return (
    <div className="w-screen relative ">
      <div
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
      </div>
      <div className="z-10 text-2xl pt-20  w-full flex flex-row flex-wrap justify-center ">
        <div className="animate-fadein-01 flex flex-col mx-5 mb-10  top-0 left-0  relative w-96 h-fit  ">
          <div
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            style={
              onHover ? { filter: "drop-shadow( .45vw .45vw 0 black)" } : null
            }
            className=" mb-10 rounded-3xl bg-cover bg-right-top bg-gradient04 px-10 pb-3 pt-10 text-3xl tracking-wide text-left  text-black font-whytemono selection:bg-fuchsia-300 selection:text-fuchsia-900 "
          >
            <p className=" text-6xl font-whyteinktrap ">
              <span className="  mix-blend-overlay filter ">
                Creative Developer
              </span>
              <div className="flex flex-row  pt-3 pr-10  pb-5  justify-end">
                <div className=" text-3xl pr-5 pt-3 animate-bounce-slow text-yellow-300 ">
                  {arrow}
                </div>
                <p className=" mt-1 w-48 z-40 flex justify-around  text-white rounded-full py-1 px-7 whitespace-nowrap font-bold tracking-wide bg-trp border  text-2xl font-whytemono  border-black">
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
          <div
            onMouseEnter={() => setOnHover1(true)}
            onMouseLeave={() => setOnHover1(false)}
            style={
              onHover1 ? { filter: "drop-shadow( .45vw .45vw 0 black)" } : null
            }
            className="  animate-fadein-02 text-right py-10 px-30 w-96  flex justify-around rounded-3xl bg-cover bg-left-top bg-gradient01 h-60"
          >
            <p className=" text-white pr-5 pb-5 text-8xl font-whyteinktrap leading-15 mix-blend-exclusion">
              jexica ayran
            </p>
          </div>
        </div>

        <div
          onMouseEnter={() => setOnHover2(true)}
          onMouseLeave={() => setOnHover2(false)}
          style={
            onHover2 ? { filter: "drop-shadow( .45vw .45vw 0 black)" } : null
          }
          className="animate-fadein-02 flex mx-5 mb-10 p-10 top-0 left-0  relative w-96 h-fit rounded-3xl bg-cover bg-right-top bg-gradient06 "
        >
          <div className="text-2xl tracking-wide text-left  text-black font-whytemono selection:bg-fuchsia-300 selection:text-fuchsia-900 ">
            Hello, <br className="mb-3" />
            I’m{" "}
            <span className=" font-whyteinktrap tracking-wider">
              Jexica Ayran
            </span>
            , <br />a{" "}
            <span className="font-social mix-blend-difference text-red-500 ">
              designer
            </span>{" "}
            and{" "}
            <span className=" mix-blend-difference text-red-400 ">
              web developer
            </span>{" "}
            originally from the SF Bay Area and now currently residing in NYC.
            <p className="mt-3 text-lg">
              <span className="text-yellow-300">&#10022;</span> California
              College of the Arts (SF, CA):
              <br /> Bachelor of Architecture, 2016.
            </p>
            <p className="mt-3 text-lg">
              <span className="text-yellow-300">&#10022;</span> General
              Assembly: Software Engineering Immersive, 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
