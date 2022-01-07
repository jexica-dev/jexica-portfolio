import Image from "next/image";
import Link from "next/dist/client/link";
import Media from "react-media";
// import { randFloatSpread } from "three/src/math/MathUtils";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

export default function ProjectCard(props) {
  return (
    <SafeHydrate>
      <Media queries={{ mobile: { maxWidth: 700 } }}>
        {(matches) => {
          console.log(matches.mobile);
          return matches.mobile ? (
            <>
              <div
                className="mb-8 relative overflow-hidden align-center justify-center "
                style={{ width: "100vw", height: "auto" }}
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
                <p className="mb-12 z-10 bottom-0 flex flex-row w-full align-center text-left text-xl">
                  <Link className="" href={props.deployed}>
                    Deployed
                  </Link>
                  <Link className="" href={props.github}>
                    Github
                  </Link>
                  {props.figma ? (
                    <Link className="figma" href={props.figma}>
                      Figma
                    </Link>
                  ) : null}
                </p>
              </>
            </>
          ) : (
            <>
              <div
                className="flex flex-col mb-8 relative justify-center align-center overflow-hidden"
                style={{ width: 750, height: 410 }}
              >
                <Image
                  className={
                    "transition duration-500 ease-in-out opacity-100 hover:opacity-0 absolute z-10 top-0 left-0"
                  }
                  src={props.img}
                  width={750}
                  height={410}
                  alt={props.alt}
                  layout="responsive"
                />
                <video
                  className="absolute z-0 top-0 left-0 sm: "
                  width="750px"
                  height="410px"
                  autoPlay
                  loop
                >
                  <source src={props.vid} type="video/mp4" />
                </video>
              </div>
              <>
                <div className="flex flex-col" style={{width: '750px' }}>
                  <p className="px-16 z-10 bottom-0 flex flex-row w-full align-center justify-left text-xl">
                    <Link className="" href={props.deployed}>
                      Deployed
                    </Link>
                    <Link className="github" href={props.github}>
                      Github
                    </Link>
                    {props.figma ? (
                      <Link className="figma" href={props.figma}>
                        Figma
                      </Link>
                    ) : null}
                  </p>
                  <div className="w-full ">
                    <p className="text-white text-xs w-full text-left p-10 pt-2">{props.children}</p>
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
