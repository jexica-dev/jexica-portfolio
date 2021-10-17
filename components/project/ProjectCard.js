import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div
      className="mb-10 relative overflow-hidden"
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
        height="410"
        autoPlay
        loop
      >
        <source src={props.vid} type="video/mp4" />
      </video>
    </div>
  );
}
