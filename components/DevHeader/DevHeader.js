import React from "react";

export default function DevHeader() {
  return (
    <div className={" fixed top-0 left-0 z-20 mix-blend-exclusion text-white"}>
      <div
        style={{ fontSize: "10vw", padding: "7vh 3vw 0 " }}
        className=" pt-20 font-whyteinktrap flex flex-row "
      >
        portfolio
        <div style={{ padding: "3vw 4vw 0" }}>
          <p
            style={{ fontSize: "3vw", padding: "2vw 2vw" }}
            className="  border-2 flex justify-around bg-white text-black rounded-full whitespace-nowrap font-bold tracking-wider "
          >
            creative developer
          </p>
        </div>
      </div>
    </div>
  );
}
