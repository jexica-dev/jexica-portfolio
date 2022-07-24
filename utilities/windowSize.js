import { useEffect, useState } from "react";

export default function windowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // half of window size
  let windowSize = width / 2;
  let aspect = 438.45 / 790;

  const { innerWidth, innerHeight } = window;

  return { innerWidth, innerHeight, windowSize, aspect };
}
