import React from "react";
import "./button-icon.scss";

export default function Text({
  children,
  text,
  color,
  link,
  className,
  onClick,
  ...rest
}) {
  return (
    <a
      className={`button-icon ${className}`}
      href={link}
      onClick={onClick}
      {...rest}
    >
      {children ?? text}
    </a>
  );
}
