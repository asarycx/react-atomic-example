import React from "react";
import "./dashboard.scss";
import Card from "../../molecules/Card";
import ImgB from "../../molecules/ImageBlock";

import def from "./dummy";
export default function Dashboard({ items = def }) {
  function whichOne(item) {
    switch (item.type) {
      case "card":
        return <Card {...item} />;
      case "image":
        return <ImgB {...item} />;

      default:
        return null;
    }
  }
  return <div className="dashboard">{items.map((item) => whichOne(item))}</div>;
}
