import React from "react";
// import Image from "next/dist/client/image";

export default function Modal(props) {
  return (
    <div className="">
      <video
        className="absolute z-0 top-0 left-0 pb-3"
        width="100%"
        height="auto"
        autoPlay
        loop
        controls
      >
        <source src={props.modalImage} type="video/mp4" />
      </video>
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
