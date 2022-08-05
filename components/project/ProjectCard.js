import Image from "next/image";
import Link from "next/dist/client/link";
import Media from "react-media";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

export default function ProjectCard(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [onHover, setOnHover] = useState(false);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // half of window size
  let windowSize = width / 2;
  let aspect = 438.45 / 790;

  const hoverText = (
    <div className=" font-whytemono text-black bg-yellow-300 p-3 h-full border  border-black ">
      <span
        style={{ fontSize: "3.75vw", lineHeight: "4vw" }}
        className="z-30 mix-blend-normal "
      >
        <button
          onClick={() => {
            props.setModalOpen(true);
            props.setModalImage(props.vid);
          }}
        >
          <Marquee
            style={{
              textAlign: "center",
              widows: "3vw",
              padding: "0 0 1vw 0",
            }}
            direction="right"
            className="overflow-hidden p-1 hover:text-red-500"
            gradient={null}
            speed={30}
            pauseOnHover
          >
            {props.title} &nbsp;
            {props.title} &nbsp;
            {props.title} &nbsp;
          </Marquee>
        </button>
      </span>
      <p
        className="border-black border-t w-full p-3"
        style={{ paddingTop: "1vw", fontSize: "1.5vw" }}
      >
        {props.info}
      </p>
    </div>
  );

  return (
    <SafeHydrate>
      <Media queries={{ mobile: { maxWidth: 768 } }}>
        {(matches) => {
          return matches.mobile ? (
            <>
              <div
                className="relative justify-center align-center overflow-hidden mb-5 "
                // className="w-fit relative overflow-hidden align-center justify-center "
                // className="mb-5 hover:border-black border border-white  drop-shadow-lg rounded-large w-72 h-72  backdrop-blur-xl z-1"
                style={{
                  height: "auto",
                }}
              >
                <Image
                  className={
                    "drop-shadow-2xl  w-72 h-72  backdrop-invert backdrop-blur-xl z-1   "
                  }
                  src={props.img}
                  width={750}
                  height={410}
                  alt={props.alt}
                  layout="responsive"
                />
              </div>
              <p></p>
              <>
                <p className=" z-10 bottom-0 flex flex-row w-full align-center text-left text-xl">
                  <div></div>
                </p>
              </>
            </>
          ) : (
            <>
              <div
                onMouseEnter={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
                className=" relative justify-center align-center overflow-hidden"
                style={{
                  width: windowSize * 0.9,
                  height: windowSize * aspect,

                  // filter: "drop-shadow(5px 5px 1px black)",
                }}
              >
                <div className=" relative">
                  <div
                    className={
                      onHover
                        ? " text-left absolute bottom-0 left-0 w-full z-40 h-3/4 "
                        : " hide"
                    }
                  >
                    {onHover ? hoverText : null}
                  </div>
                  <div className=" border border-black  relative top-0 right-0">
                    <Image
                      className={
                        // "transition duration-500 ease-in-out opacity-100 hover:opacity-0 absolute z-10"

                        " hover:mix-blend-difference hover:filter hover:invert  absolute drop-shadow-2xl   backdrop-invert z-10  "
                      }
                      src={props.img}
                      width={windowSize}
                      height={windowSize * aspect}
                      alt={props.alt}
                      layout="responsive"
                    />

                    {/* <div className=" animate-fadein   absolute z-0 top-0 left-0 bg-gradient-to-r from-indigo-700 via-red-500 w-full h-full object-center "></div> */}
                  </div>
                </div>
                {/* <video
                    className="absolute z-0 top-0 left-0 pb-3"
                    width={windowSize + "px"}
                    height={windowSize * aspect + "px"}
                    autoPlay
                    loop
                  >
                    <source src={props.vid} type="video/mp4" />
                  </video> */}
              </div>

              {/* <div className="flex flex-col" style={{ width: "750px" }}>
                <div className="w-full">
                  <p className="text-white w-full text-left ">
                    {props.children}
                  </p>
                </div>
              </div> */}
            </>
          );
        }}
      </Media>
    </SafeHydrate>
  );
}

//  <p className=" z-10 bottom-0 flex flex-row w-full align-center text-xl">
//               <Link className="" href={props.deployed}>
//                   Live Demo
//                 </Link>
//                 &nbsp;
//                 <Link className="github" href={props.github}>
//                   Github
//                 </Link>
//                 &nbsp;
//                 {props.figma ? (
//                   <Link className="figma" href={props.figma}>
//                     Figma
//                   </Link>
//               ) : null}
//             </p>
