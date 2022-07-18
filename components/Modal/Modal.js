import Image from "next/image";

export function Modal(props) {
  return (
    <div className="">
      <Image
        className={"absolute z-10"}
        src={"/digialtar.png"}
        width={500}
        height={300}
        alt={"image"}
        layout="responsive"
      />
    </div>
  );
}
