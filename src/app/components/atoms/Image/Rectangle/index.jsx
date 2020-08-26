import React from "react";
import "./rectangle.scss";

export default function Circle({ src, alt, className, ...rest }) {
  return <img src={src} alt={alt} className={`image-rectangle ${className}`} />;
}
