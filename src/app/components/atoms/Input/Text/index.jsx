import React from "react";
import "./input-text.scss";

export default function Text({
  name,
  value,
  onChange,
  required,
  type = "text",
  className,
  ...rest
}) {
  return (
    <input
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className={`input-text ${className}`}
    />
  );
}
