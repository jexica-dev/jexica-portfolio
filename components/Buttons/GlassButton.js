import Link from "next/dist/client/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export default function GlassButton() {
  const [onHover, setOnHover] = useState(false);
  const arrow = "→  ";
  return (
    <div className="w-screen relative">
      <div className="z-10 text-2xl pt-20  w-full flex flex-row flex-wrap justify-center ">
        {/* <div className=" flex flex-col justify-center">
          <div className=" animate-fadein pl-7 text-black text-left py-10 px-30 mx-5  mb-7  flex items-start rounded-3xl bg-right-top bg-gradient07  w-96 h-60 bg-cover filter">
            <p className="   text-6xl font-whyteinktrap ">
              <span className="  mix-blend-overlay filter drop-shadow-sm">
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
                          playOnHover
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
          <div className="  animate-fadein-02 text-right py-10 px-30 mx-5  mb-7  w-96  flex justify-around rounded-3xl bg-cover bg-left-top bg-gradient06 h-60">
            <p className=" text-white pr-5 pb-5 text-8xl font-whyteinktrap leading-15 mix-blend-exclusion">
              jexica ayran
            </p>
          </div>
        </div> */}

        <div className="animate-fadein-03 flex flex-col mx-5 mb-10  top-0 left-0  relative w-96 h-fit  ">
          <div className="mb-10 rounded-3xl bg-cover bg-right-top bg-gradient04 px-10 pb-3 pt-10 text-3xl tracking-wide text-left  text-black font-whytemono selection:bg-fuchsia-300 selection:text-fuchsia-900 ">
            <p className="   text-6xl font-whyteinktrap ">
              <span className="  mix-blend-overlay filter drop-shadow-sm">
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
                          playOnHover
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
          <div className="  animate-fadein-02 text-right py-10 px-30 w-96  flex justify-around rounded-3xl bg-cover bg-left-top bg-gradient01 h-60">
            <p className=" text-white pr-5 pb-5 text-8xl font-whyteinktrap leading-15 mix-blend-exclusion">
              jexica ayran
            </p>
          </div>
        </div>

        <div className="animate-fadein-03 flex mx-5 mb-10 p-10 top-0 left-0  relative w-96 h-fit rounded-3xl bg-cover bg-right-top bg-gradient06 ">
          <div className="text-3xl tracking-wide text-left  text-black font-whytemono selection:bg-fuchsia-300 selection:text-fuchsia-900 ">
            Hello, <br className="mb-3" />
            I’m a web developer specializing in React (MERN), Java, and product
            to graphic design technologies. <br className="mb-3" />
            Based in NYC + Open to remote work.
          </div>
        </div>
      </div>
    </div>
  );
}
