import React from "react";
// import "../Buttons/SkillButtons.css";

export default function SkillButtons(props) {
  const defaultSkillBtn =
    " flex justify-around text-white rounded-full py-3 px-10 mx-3 whitespace-nowrap font-medium tracking-widest bg-black text-2xl mb-5";

  return (
    <>
      <div className="w-screen h-full flex flex-wrap flex-row justify-center">
        <div className="justify-center flex content-start flex-wrap flex-row  items-start ">
          <div className={"w-28" + defaultSkillBtn}>HTML</div>
          <div className={" w-28" + defaultSkillBtn}>CSS</div>
          <div className={"w-48" + defaultSkillBtn}>Javascript</div>
          <div className={"w-30" + defaultSkillBtn}>Node.js</div>
        </div>
        <div className="justify-center flex content-start flex-wrap flex-row  items-start  ">
          <div className={"w-44" + defaultSkillBtn}>React.js</div>
          <div className={" w-48" + defaultSkillBtn}>MongoDB</div>
          <div className={"w-44" + defaultSkillBtn}>Express.js</div>
          <div className={"w-48" + defaultSkillBtn}>Tailwind CSS</div>
        </div>
        <div className="justify-center flex content-start flex-wrap flex-row  items-start ">
          <div className={"w-48" + defaultSkillBtn}>Bootstrap</div>
          <div className={"w-28" + defaultSkillBtn}>Java</div>

          <div className={"w-28" + defaultSkillBtn}>Ruby</div>
          <div className={"w-52" + defaultSkillBtn}>Ruby on Rails</div>
        </div>
        <div className="justify-center flex content-start flex-wrap flex-row  items-start ">
          <div className={" w-32" + defaultSkillBtn}>Next.js</div>
          <div className={" w-64" + defaultSkillBtn}>React Three Fiber</div>
          <div className={"w-48" + defaultSkillBtn}>Spring Boot</div>
          <div className={"w-52" + defaultSkillBtn}>Material UI</div>
        </div>
      </div>
    </>
  );
}
