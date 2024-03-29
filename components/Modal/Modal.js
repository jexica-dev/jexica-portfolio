import React from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

export default function Modal(props) {
  return (
    <div className="p-5 overflow-y-scroll">
      <p className=" text-left font-whyteinktrap lg:text-3xl pb-2">
        {props.modalData.title}
      </p>

      <p className=" pl-3 pt pb-2 text-left font-monument lg:text-sm">
        {props.modalData.date} | {props.modalData.lang}
      </p>

      <div className="">
        <video className="" width="100%" height="auto" autoPlay loop muted>
          <source src={props.modalData.video} type="video/mp4" />
        </video>
      </div>

      <div className="pt-2 text-xs underline underline-offset-4 font-whytemono text-left flex flex-row justify-around w-1/2">
        <label className="">
          <Link href={props.modalData.site}>Online</Link>
        </label>
        <label className="">
          <Link href={props.modalData.github}>Github</Link>
        </label>
        {props.modalData.figma ? (
          <>
            <label className="">
              <Link href={props.modalData.figma}>Figma</Link>
            </label>
          </>
        ) : (
          ""
        )}
      </div>
      <p className="pt-2 px-2 text-sm text-left font-monument">
        {props.modalData.body}
      </p>
    </div>
  );
}
