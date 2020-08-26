import React from "react";
import "./nav.scss";

import ButtonIcon from "../../atoms/ButtonIcon";
import ImageCircle from "../../atoms/Image/Circle";
import Title from "../../atoms/Title";
import Card from "../../molecules/Card";
import Logo from "../../../../assets/images/logo.png";

export default function MobileMenu({
  menus = [],
  className,
  title = "sample",
}) {
  return (
    <div className={`nav ${className}`}>
      <div className="nav__left-menu">
        <ImageCircle src={Logo} />
        <Title text={title} />
      </div>
      <div className="nav__right-menu">
        {menus.map((item) => (
          <ButtonIcon {...item} />
        ))}
      </div>
    </div>
  );
}
