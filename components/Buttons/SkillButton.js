import React from "react";
// import "../Buttons/SkillButtons.css";
import Draggable from "react-draggable";

import { useMediaQuery } from "react-responsive";

export default function SkillButtons(props) {
  const lgScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const mdScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const smScreen = useMediaQuery({ query: "(min-width: 640px)" });

  const defaultSkillBtn =
    "-z-10 cursor-move bg-right-top bg-cover mix-blend-hard-light  justify-around text-black  rounded-full py-3 px-10  whitespace-nowrap font-medium tracking-widest text-xl ";

  let languages = [
    "HTML",
    "CSS + Sass",
    "JavaScript",
    "Node.js",
    "ReactJS",
    "MongoDB",
    "ExpressJS",
    "TailwindCSS",
    "Figma",
    "Bootstrap",
    "MaterialUI",
    "Ruby",
    "RubyonRails",
    "NextJS",
    "Touchdesigner",
    "Adobe CC",
  ];

  let skillButtons = [];

  let gradientIndex = [
    "bg-gradient01",
    "bg-gradient02",
    "bg-gradient03",
    "bg-gradient04",
    "bg-gradient05",
    "bg-gradient01",
    "bg-gradient08",
    "bg-gradient07",
    "bg-gradient09",
  ];

  let fonts = [
    "font-format",
    "font-prophet",
    "font-gintonord",
    "font-whyteinktrap",
    "font-whytemono",
    "font-ginto",
    "font-social",
    "font-monument",
    "font-whyteinktrap",
  ];

  let top = [
    "128",
    "80",
    "132",
    "128",
    "10",
    "132",
    "14",
    "20",
    "14",
    "132",
    "20",
    "10",
    "128",
  ];
  let topRev = [
    "36",
    "24",
    "180",
    "140",
    "10",
    "5",
    "150",
    "44",
    "96",
    "180",
    "5",
    "44",
    "20",
  ];

  let corner = ["right", "left"];
  // console.log(topShuffled);
  // let topShuffled = top.sort((a, b) => Math.random() - 0.5);
  let random = top.reverse();

  for (let i = 0; i < languages.length; i++) {
    skillButtons.push(
      <Draggable>
        <div
          className={
            lgScreen
              ? `absolute mix-blend-hard-light ${corner[i % corner.length]}-${
                  topRev.reverse()[i % topRev.length]
                } top-` + top[i % top.length]
              : ""
          }
        >
          <div
            className={
              defaultSkillBtn +
              fonts[i % fonts.length] +
              " " +
              gradientIndex[i % 8]
            }
          >
            {languages[i]}
          </div>
        </div>
      </Draggable>
    );
  }

  return (
    <>
      <div className="pl-5  place-items-stretch animate-fadein lg:w-96 md:w-full sm:w-full lg:col-span-1 md:col-span-2">
        <div
          className={
            smScreen && mdScreen
              ? " z-50 grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-3 "
              : ""
          }
        >
          {skillButtons}
        </div>
      </div>
    </>
  );
}
