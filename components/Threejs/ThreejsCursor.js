import { useTrail, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import styles from "./threejscursor.module.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function ThreejsCursor() {
  const [trail, api] = useTrail(5, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow,
  }));
  const [ref, { left, top }] = useMeasure();

  const handleMouseMove = (e) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] });
  };

  return (
    <div className={styles.container}>
      <svg style={{ position: "absolute", width: 15, height: 15, zIndex: 100 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="35" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 3 9 0 1 0 1 40 -7"
          />
        </filter>
      </svg>
      <div ref={ref} className={styles.hooksMain} onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
      </div>
    </div>
  );
}
