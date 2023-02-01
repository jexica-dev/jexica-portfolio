import React from "react";
// import "../Buttons/SkillButtons.css";
import Draggable from "react-draggable";

export default function SkillButtons(props) {
  const defaultSkillBtn =
    "cursor-move bg-right-top  bg-cover mix-blend-hard-light flex justify-around text-black  rounded-full py-3 px-10  whitespace-nowrap font-medium tracking-widest text-base ";

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
    "MaterialUI",
    "Bootstrap",
    "Ruby",
    "RubyonRails",
    "NextJS",
    "Touchdesigner",
    "Adobe CC",
  ];

  let skillButtons = [];

  // WILL FIX THIS NEXT TIME

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

  for (let i = 0; i < languages.length; i++) {
    skillButtons.push(
      <Draggable>
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
      </Draggable>
    );
  }

  return (
    <>
      <div className="pl-3   place-items-stretch animate-fadein lg:w-96 md:w-full sm:w-full lg:col-span-1 md:col-span-2">
        <div className="  grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-3 ">
          {skillButtons}
        </div>
      </div>
    </>
  );
}
