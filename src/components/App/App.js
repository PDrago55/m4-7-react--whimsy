import React from "react";
import styled from "styled-components";
import "focus-visible";
import { format } from "date-fns";
import avatar from "../../assets/carmen-sandiego.png";

import Tweet from "../Tweet";

const initialState = {
  numOfLikes: 68,
  numOfRetweets: 419,
  isLikedByCurrentUser: false,
  isRetweetedByCurrentUser: false,
};

const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "Like":
      if (state.isLikedByCurrentUser) {
        newState = {
          ...state,
          numOfLikes: state.numOfLikes - 1,
          isLikedByCurrentUser: false,
        };
      } else {
        newState = {
          ...state,
          numOfLikes: state.numOfLikes + 1,
          isLikedByCurrentUser: true,
        };
      }
      break;
    case "Retweet":
      if (state.isRetweetedByCurrentUser) {
        newState = {
          ...state,
          numOfRetweets: state.numOfRetweets - 1,
          isRetweetedByCurrentUser: false,
        };
      } else {
        newState = {
          ...state,
          numOfRetweets: state.numOfRetweets + 1,
          isRetweetedByCurrentUser: true,
        };
      }
      break;
    default:
      console.log("x");
  }
  return newState;
};

const App = () => {
  const date = format(new Date(), "K:mm  a · PPP");

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleToggleLike = () => {
    dispatch({ type: "Like" });
  };

  const handleToggleRetweet = () => {
    dispatch({ type: "Retweet" });
  };
  return (
    <Wrapper>
      <Tweet
        tweetContents="LIVERPOOL SUCKS!"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={date}
        handleToggleLike={handleToggleLike}
        handleToggleRetweet={handleToggleRetweet}
        numOfLikes={state.numOfLikes}
        numOfRetweets={state.numOfRetweets}
        isRetweetedByCurrentUser={state.isRetweetedByCurrentUser}
        isLikedByCurrentUser={state.isLikedByCurrentUser}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
