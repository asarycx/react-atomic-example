import React from "react";
import "./circle.scss";

export default function Circle({ src, alt, className, ...rest }) {
  return (
    <img src={src} alt={alt} className={`image-circle border ${className}`} />
  );
}
