import React from "react";
// import "../Buttons/SkillButtons.css";

export default function SkillButtons(props) {
  const defaultSkillBtn =
    " flex justify-around text-white rounded-full py-3 px-10 whitespace-nowrap font-medium tracking-widest bg-black text-2xl ";

  return (
    <>
      <div className="w-screen h-full flex lg:flex-wrap flex-col lg:flex-row md:flex-col sm:flex-col justify-center">
        <div className="align-center w-screen flex  justify-around px-60 pb-5">
          <div className={"w-28" + defaultSkillBtn}>HTML</div>
          <div className={" w-28" + defaultSkillBtn}>CSS</div>
          <div className={"w-48" + defaultSkillBtn}>Javascript</div>
          <div className={"w-30" + defaultSkillBtn}>Node.js</div>
        </div>
        <div className="align-center w-screen flex justify-around px-52 pb-5">
          <div className={"w-44" + defaultSkillBtn}>React.js</div>
          <div className={" w-48" + defaultSkillBtn}>MongoDB</div>
          <div className={"w-44" + defaultSkillBtn}>Express.js</div>
          <div className={"w-28" + defaultSkillBtn}>Java</div>
        </div>
        <div className="align-center w-screen flex justify-around px-52 pb-5">
          <div className={" w-32" + defaultSkillBtn}>Next.js</div>
          <div className={"w-48" + defaultSkillBtn}>Tailwind CSS</div>
          <div className={"w-28" + defaultSkillBtn}>Ruby</div>
          <div className={"w-52" + defaultSkillBtn}>Ruby on Rails</div>
        </div>
      </div>
    </>
  );
}
