import React from "react";
// import Image from "next/dist/client/image";

export default function Modal(props) {
  return (
    <div className="p-5 overflow-y-scroll">
      <p className=" text-left font-whyteinktrap lg:text-3xl"> Project</p>

      <p className=" pl-3 py-2 text-left font-monument lg:text-sm">
        {" "}
        xx-xxxx | languages
      </p>

      <div className="">
        <video
          className=" z-0 top-0 left-0 pb-3"
          width="100%"
          height="auto"
          autoPlay
          loop
          controls
        >
          <source src={props.modalImage} type="video/mp4" />
        </video>
      </div>
      <div className=" font-whytemono text-left flex flex-row justify-around w-1/2">
        <label className="">Online</label>
        <label className="">Github</label>
        <label className="">Figma</label>
      </div>
      <p className="pt-2 text-sm text-left font-monument">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

{
  /* <Image
  className={"absolute z-10"}
  src={props.modalImage}
  width={500}
  height={300}
  alt={"image"}
  layout="responsive"
/>; */
}
