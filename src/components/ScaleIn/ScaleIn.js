import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  console.log("hi");
  const props = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 100,
      friction: 6,
    },
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export default ScaleIn;
