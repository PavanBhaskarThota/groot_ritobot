import React from "react";
import styled from "styled-components";

export const BackgroundDisplay = ({ background, foreground }) => {
  return (
    <StyledBackground background={background}>
      {foreground && (
        <div className="foreground">
          <img src={foreground} alt="" />
        </div>
      )}
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  width: 100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0) 40%, #000000 90.92%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, #000000 100%),
    url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 1;
  min-height: 100vh;

  .foreground {
    position: absolute;
    top: -90px;
    right: 90px;
    pointer-events: none;
  }

  .foreground img {
    width: 70%;
  }

  @media (max-width: 768px) {
    min-height: 30vh;
    .foreground {
      width: 50%;
      top: -40px;
      right: 0px;
      z-index: -2;
    }
    .foreground img {
      width: 90%;
    }
  }
`;
