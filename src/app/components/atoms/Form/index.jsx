import React from "react";

export default function Form({ children, name, ...rest }) {
  return (
    <form name={name} {...rest}>
      {children}
    </form>
  );
}
