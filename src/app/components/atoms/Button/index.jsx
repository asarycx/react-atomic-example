import React from "react";
import "./button.scss";

export default function Text({ children, text, type, color, onClick, align }) {
  switch (type) {
    case "submit":
      return (
        <button
          type="submit"
          class={`button ${color} submit button--${align}`}
          onClick={onClick}
        >
          {children ?? text}
        </button>
      );
    default:
      return (
        <button type="button" class={`button ${color}`} onClick={onClick}>
          {children ?? text}
        </button>
      );
  }
}
