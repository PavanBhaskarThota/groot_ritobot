import React, { useState } from "react";
import styled from "styled-components";
import bg1 from "../assets/backgrounds/1-background.png";
import bg2 from "../assets/backgrounds/2-background.png";
import bg3 from "../assets/backgrounds/3-background.png";
import bg4 from "../assets/backgrounds/4-background.png";
import bg5 from "../assets/backgrounds/5-background.png";
import bg6 from "../assets/backgrounds/6-background.png";

import thumb1 from "../assets/thumbnails/1-thumbnail.png";
import thumb2 from "../assets/thumbnails/2-thumbnail.png";
import thumb3 from "../assets/thumbnails/3-thumbnail.png";
import thumb4 from "../assets/thumbnails/4-thumbnail.png";
import thumb5 from "../assets/thumbnails/5-thumbnail.png";
import thumb6 from "../assets/thumbnails/6-thumbnail.png";

import fore1 from "../assets/foregrounds/1-foreground-cutout.png";

const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6];
const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];
const foregrounds = [fore1];

export const Ricobot = () => {
  const [ImageNum, SetImageNum] = useState(0);
  return (
    <MAIN>
      <DIV className="home" backgroundImage={backgroundImages[ImageNum]}>
        {foregrounds[ImageNum] && (
          <div className="foreground">
            <img src={foregrounds[ImageNum]} alt="" />
          </div>
        )}
      </DIV>

      <div>
        <div className="content">
          <h1 className="more_from">MORE FROM RICO THE DOG</h1>
          <button className="ricoback">RICO IS BACK!</button>
          <h1 className="title">RICOBOT</h1>
          <p>
            Charge into a brand-new supersized adventure with RICO across 50
            exciting and diverse worlds, available now on PS5!
          </p>
          <button className="learn">Learn More</button>
          <div className="backgrounds">
            {thumbnails.length > 0 &&
              thumbnails.map((img, i) => {
                return (
                  <div
                    key={i}
                    className={`thumbnail ${ImageNum === i ? "active" : ""}`}
                    onClick={() => SetImageNum(i)}
                  >
                    <img src={img} alt="" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </MAIN>
  );
};

const MAIN = styled.main`
  overflow-x: hidden;
  min-height: 100vh;
  background: linear-gradient(180deg, #000000, #000000 100%);
  margin: 100px 0px;

  .content {
    color: white;
    width: 85%;
    margin: auto;
    text-align: left;
    padding-top: 50px;
    padding-bottom: 50px;
    z-index: 2;
    position: relative;
  }

  .more_from {
    font-family: "Raleway", sans-serif;
    font-size: 26px;
    font-weight: 900;
    width: 250px;
  }

  .title {
    font-family: "Raleway", sans-serif;
    font-size: 35px;
    font-weight: 900;
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

  .backgrounds {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: end;
    z-index: 2;
  }

  .thumbnail {
    width: 100px;
    height: 100px;
  }

  .thumbnail img {
    width: 100%;
    border-radius: 5px;
  }

  .thumbnail.active {
    width: 150px;
    height: 150px;
    padding: 12px;
    border-radius: 15px;
    border: 4px solid white;
  }

  @media (max-width: 768px) {
    background-size: cover;
    background-position: center center;
    max-height: 400px;
    .content {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .thumbnail.active {
      width: 90px;
      height: 90px;
      padding: 5px;
      border-radius: 10px;
      border-top: 3px solid white;
      border-right: 3px solid white;
    }

    .more_from {
      font-family: "Raleway", sans-serif;
      font-size: 21px;
      font-weight: 900;
      width: 200px;
      margin-bottom: 100px;
    }

    .title {
      font-size: 49px;
    }

    .content p {
      font-size: 14px;
    }

    .ricoback,
    .learn {
      font-size: 14px;
    }

    .foreground {
      bottom: 70px;
    }
  }
`;

const DIV = styled.div`
  width: 100%;
  /* background: linear-gradient(
      to left,
      rgba(37, 45, 55, 0) 40%,
      #000000 72.92%,
      #09101a 100%
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, #000000 100%),
    url(${({ backgroundImage }) => backgroundImage}); */
  background: linear-gradient(to left, rgba(0, 0, 0, 0) 40%, #000000 90.92%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, #000000 100%),
    url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 1;
  min-height: 100vh;

  .foreground {
    position: absolute;
    top: -90px;
    right: 90px;
    z-index: -2;
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
