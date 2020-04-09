import React from "react";

const Particle = ({ angle, distance }) => {
  const convertDegreesToRadians = angle => (angle * Math.PI) / 180;
  const angleInRads = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;
  return (
    <div>
      {x}
      {y}
    </div>
  );
};

export default Particle;
