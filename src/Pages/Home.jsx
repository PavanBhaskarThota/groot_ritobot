import React, { useState } from "react";
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
import { MainLayout } from "./components/MainLayout";
import { BackgroundDisplay } from "./components/BackgroundDisplay";
import { ThumbnailList } from "./components/ThumbnailList";

const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];
const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];
const foregrounds = [fore1];

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <MainLayout>
      <BackgroundDisplay
        background={backgrounds[currentImage]}
        foreground={foregrounds[currentImage]}
      />
      <div className="content">
        <h1 className="more_from">MORE FROM RICO THE DOG</h1>
        <button className="ricoback">RICO IS BACK!</button>
        <h1 className="title">RICOBOT</h1>
        <p>
          Charge into a brand-new supersized adventure with RICO across 50
          exciting and diverse worlds, available now on PS5!
        </p>
        <button className="learn">Learn More</button>
        <ThumbnailList
          thumbnails={thumbnails}
          activeIndex={currentImage}
          onThumbnailClick={setCurrentImage}
        />
      </div>
    </MainLayout>
  );
};

