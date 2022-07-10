import Image from "next/image";
import Link from "next/dist/client/link";
import Media from "react-media";
import { useEffect, useState } from "react";
// import { randFloatSpread } from "three/src/math/MathUtils";

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

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // half of window size
  let size = width / 2;
  let aspect = 438.45 / 790;

  return (
    <SafeHydrate>
      <Media queries={{ mobile: { maxWidth: 700 } }}>
        {(matches) => {
          console.log(matches.mobile);
          return matches.mobile ? (
            <>
              <div
                className="w-fit relative overflow-hidden align-center justify-center "
                style={{ height: "auto" }}
              >
                <Image
                  className={"absolute z-10 top-0 left-0"}
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
                  <div>
                    {/* <Link className="" href={props.deployed}>
                      Live Demo
                    </Link>
                  </div>
                  <div>
                    <Link className="" href={props.github}>
                      Github
                    </Link>
                  </div>
                  <div> */}
                    {/* {props.figma ? (
                      <Link className="figma" href={props.figma}>
                        Figma
                      </Link>
                    ) : null} */}
                  </div>
                </p>
              </>
            </>
          ) : (
            <>
              <div
                className="backdrop-invert drop-shadow-xl  relative justify-center align-center overflow-hidden"
                style={{ width: size, height: size * aspect }}
              >
                <Image
                  className={
                    "transition duration-500 ease-in-out opacity-100 hover:opacity-0 absolute z-10"
                  }
                  src={props.img}
                  width={size}
                  height={size * aspect}
                  alt={props.alt}
                  layout="responsive"
                />
                <video
                  className="absolute z-0 top-0 left-0 "
                  width={size + "px"}
                  height={size * aspect + "px"}
                  autoPlay
                  loop
                >
                  <source src={props.vid} type="video/mp4" />
                </video>
              </div>
              <>
                <div className="flex flex-col" style={{ width: "750px" }}>
                  <p className=" z-10 bottom-0 flex flex-row w-full align-center text-xl">
                    {/* <Link className="" href={props.deployed}>
                      Live Demo
                    </Link>
                    &nbsp;
                    <Link className="github" href={props.github}>
                      Github
                    </Link>
                    &nbsp;
                    {props.figma ? (
                      <Link className="figma" href={props.figma}>
                        Figma
                      </Link> */}
                    {/* ) : null} */}
                  </p>
                  <div className="w-full">
                    <p className="text-white w-full text-left ">
                      {props.children}
                    </p>
                  </div>
                </div>
              </>
            </>
          );
        }}
      </Media>
    </SafeHydrate>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
