import React from "react";
import "./link.scss";

export default function Text({
  children = "",
  text = "",
  color = "",
  href = "#",
  className,
}) {
  return (
    <a href={href} className={`link ${color} ${className}`} target="">
      {children || text}
    </a>
  );
}
