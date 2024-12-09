import React from "react";
import styled from "styled-components";

export const ThumbnailList = ({
  thumbnails,
  activeIndex,
  onThumbnailClick,
}) => {
  return (
    <StyledThumbnailList>
      {thumbnails.map((thumbnail, index) => (
        <div
          key={index}
          className={`thumbnail ${activeIndex === index ? "active" : ""}`}
          onClick={() => onThumbnailClick(index)}
        >
          <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
        </div>
      ))}
    </StyledThumbnailList>
  );
};

const StyledThumbnailList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: end;

  .thumbnail {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }

  .thumbnail img {
    width: 100%;
    border-radius: 5px;
  }

  .thumbnail.active {
  width: 150px;
  height: 150px;
  padding: 12px;
  display: flex;
  position: relative;
  align-items: center;
  border: 4px solid transparent;
  color: #fff;
  background: #000;
  border-radius: 15px;
  background-clip: padding-box;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -3px; 
    border-radius: inherit;
    background: linear-gradient(
      to top right,
      white,
      white 10%,
      white 20%,
      transparent 50%,
      white 85%,
      white 100%
    );
  }
}


  @media (max-width: 768px) {
    .thumbnail.active {
      width: 90px;
      height: 90px;
      padding: 5px;
    }
  }
`;
