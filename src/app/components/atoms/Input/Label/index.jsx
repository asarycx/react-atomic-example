import React from "react";
import "./label.scss";

export default function Text({
  children = "",
  color = "",
  required,
  text = "",
  className,
  ...rest
}) {
  return (
    <label
      className={`label ${color} ${required ? "required" : ""} ${className}`}
    >
      {children || text}
    </label>
  );
}
