import React from "react";
import "./input.scss";

import Label from "../../atoms/Input/Label";
import Text from "../../atoms/Input/Text";

export default function Card({
  label,
  name,
  required,
  color,
  onChange,
  type,
  value,
  ...rest
}) {
  return (
    <div className="input">
      <Label
        className="input__label"
        text={label}
        required={required}
        color={color}
        {...rest}
      />
      <Text
        className="input__field"
        value={value}
        name={name}
        required={required}
        onChange={onChange}
        type={type}
        {...rest}
      />
    </div>
  );
}
