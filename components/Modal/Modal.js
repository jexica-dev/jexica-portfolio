import React from "react";
import Image from "next/dist/client/image";

export default function Modal(props) {
  return (
    <div className="">
      <Image
        className={"absolute z-10"}
        src={props.modalImage}
        width={500}
        height={300}
        alt={"image"}
        layout="responsive"
      />
    </div>
  );
}
