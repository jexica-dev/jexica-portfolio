import Image from "next/image";
import Link from "next/dist/client/link";
import Media from "react-media";

export default function ProjectCard(props) {
  return (
    <>
      <Media queries={{ mobile: { maxWidth: 700 } }}>
        {(matches) => {
          console.log(matches.mobile);
          return matches.mobile ? (
            <>
              <div
                className="mb-8 relative overflow-hidden"
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
              <p className="mb-12 z-10 bottom-0 flex flex-row w-1/2 text-red text-xl">
                <Link className="" href={props.deployed}>
                  Deployed
                </Link>
                <Link className="" href={props.github}>
                  Github
                </Link>
              </p>
            </>
          ) : (
            <>
              <div
                className="mb-8 relative overflow-hidden"
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
                  className=" absolute z-0 top-0 left-0"
                  width="750px"
                  height="410px"
                  autoPlay
                  loop
                >
                  <source src={props.vid} type="video/mp4" />
                </video>
              </div>
              <p className="mb-24 z-10 bottom-0 flex flex-row w-1/2 text-red text-xl">
                <Link className="" href={props.deployed}>
                  Deployed
                </Link>
                <Link className="" href={props.github}>
                  Github
                </Link>
              </p>
            </>
          );
        }}
      </Media>
    </>
  );
}
