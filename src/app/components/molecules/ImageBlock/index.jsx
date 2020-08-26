import React from "react";
import "./image-block.scss";
import Image from "../../atoms/Image/Rectangle";

export default function ImageBlock({ images }) {
  return (
    <div className="image-block">
      {images.map((item) => (
        <Image className="image-block__item" {...item} />
      ))}
    </div>
  );
}
