import Image from "next/image";
import Link from "next/dist/client/link";


export default function ProjectCard(props) {
  return (
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
      <p className="mb-8 z-10 bottom-0 flex flex-row w-1/2 text-red text-xl">
      <Link  className="" href={props.deployed}>Deployed</Link>
      <Link className="" href={props.github}>Github</Link>
      </p>
      </>
  );
}
