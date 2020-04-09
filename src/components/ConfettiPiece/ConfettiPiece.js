import React from "react";
import styled from "styled-components";
import Particle from "../Particle/Particle";
function ConfettiPiece({ angle, distance }) {
  return (
    <CenteredWithinParent>
      <Particle angle={angle} distance={distance}>
        <Circle />
      </Particle>
    </CenteredWithinParent>
  );
}

const CenteredWithinParent = styled.div`
  position: absolute;
`;
const Circle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: red;
  position: relative;
`;

export default ConfettiPiece;
