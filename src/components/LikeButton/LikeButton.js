import React from "react";
import styled from "styled-components";
import { range } from "../../utils";
import Heart from "./Heart";
import { is } from "date-fns/locale";
import PoppingCircle from "../../PoppingCircle";
import ScaleIn from "../ScaleIn/ScaleIn";
import ConfettiPiece from "../ConfettiPiece/ConfettiPiece";
const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ isLiked, size = 40, isLikedByCurrentUser, color }) => {
  const heartSize = size * 0.6;

  return (
    <Wrapper>
      {isLiked ? (
        <Foreground>
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLiked} />
            {isLiked && <PoppingCircle size={size} color="#E790F7" />}
          </ScaleIn>
        </Foreground>
      ) : (
        <Background>
          <Heart width={heartSize} isToggled={isLiked} />
        </Background>
      )}
      {isLiked &&
        range(12).map(i => (
          <ConfettiPiece
            key={i}
            angle={360 * (i / 12)}
            distance={20}
            color={PARTICLE_COLORS[0]}
          />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.div`
  position: absolute;
  z-index: 0;
`;

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

export default LikeButton;
