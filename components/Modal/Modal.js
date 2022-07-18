import Image from "next/image";

export function Modal(props) {
  return (
    <div className="">
      <Image
        className={"absolute z-10"}
        src={props.modalImage}
        width={750}
        height={410}
        alt={"image"}
        layout="responsive"
      />
    </div>
  );
}
