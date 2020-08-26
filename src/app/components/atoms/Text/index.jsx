import React from "react";
import "./text.scss";

export default function Text({ children, color }) {
  return <p className={`text ${color}`}>{children}</p>;
}
