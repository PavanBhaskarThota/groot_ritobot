import React from "react";
import styled from "styled-components";

export const MainLayout = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled.main`
  overflow-x: hidden;
  min-height: 100vh;
  background: linear-gradient(180deg, #000000, #000000 100%);
  margin: 100px 0px;

  .content {
    color: white;
    width: 85%;
    margin: auto;
    text-align: left;
    padding: 50px 0;
    z-index: 2;
    position: relative;
  }

  .more_from,
  .title {
    font-family: "Raleway", sans-serif;
    font-weight: 900;
  }

  .more_from {
    font-size: 26px;
    width: 250px;
  }

  .title {
    font-size: 35px;
    width: 250px;
    margin: 10px 0px;
  }

  .content p {
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-weight: 500;
    max-width: 500px;
    line-height: 25px;
    letter-spacing: 1px;
  }

  .ricoback {
    background-color: transparent;
    border: 2px solid white;
    height: 50px;
    border-radius: 25px;
    padding: 5px 15px;
    color: white;
    font-weight: 600;
    font-size: 14px;
    margin-top: 20px;
  }

  .learn {
    background-color: #ffff;
    border: none;
    height: 50px;
    border-radius: 25px;
    padding: 10px 15px;
    color: black;
    font-weight: 900;
    font-size: 16px;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    .more_from {
      font-size: 21px;
      margin-bottom: 100px;
      width: 200px;
    }
    .title {
      font-size: 30px;
    }
    .content p {
      font-size: 14px;
    }
  }
`;
