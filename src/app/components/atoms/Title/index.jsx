import React from "react";
import "./title.scss";

export default function Text({
  children,
  color,
  size,
  text,
  className,
  ...rest
}) {
  switch (size) {
    case "h2":
      return (
        <h2 className={`title ${color} ${className}`}>{children ?? text}</h2>
      );
    case "h3":
      return (
        <h3 className={`title ${color} ${className}`}>{children ?? text}</h3>
      );
    case "h4":
      return (
        <h4 className={`title ${color} ${className}`}>{children ?? text}</h4>
      );
    case "h5":
      return (
        <h5 className={`title ${color} ${className}`}>{children ?? text}</h5>
      );
    case "h6":
      return (
        <h6 className={`title ${color} ${className}`}>{children ?? text}</h6>
      );

    default:
      return (
        <h1 className={`title ${color} ${className}`}>{children ?? text}</h1>
      );
  }
}
