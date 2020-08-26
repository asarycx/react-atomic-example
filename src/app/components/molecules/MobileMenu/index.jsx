import React from "react";
import "./mobile-menu.scss";

import ButtonIcon from "../../atoms/ButtonIcon";

export default function MobileMenu({ menus, className }) {
  return (
    <div className={`mobile-menu ${className}`}>
      {menus.map((item) => (
        <ButtonIcon className="mobile-menu__item" {...item} />
      ))}
    </div>
  );
}
