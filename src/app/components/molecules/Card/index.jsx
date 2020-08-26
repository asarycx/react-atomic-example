import React from "react";
import "./card.scss";

import ImageCircle from "../../atoms/Image/Circle";
import Title from "../../atoms/Title";
import Link from "../../atoms/Link";
import Text from "../../atoms/Text";

export default function Card({
  children,
  image,
  title,
  color,
  link,
  subtitle,
  align = "left",
}) {
  return (
    <div className="card">
      <div className={`card__header card__header--${align}`}>
        {image ? <ImageCircle className="card__image" src={image} /> : null}
        <div className="card__text">
          <Title className="card__title" color={color} text={title} />
          {subtitle ? <Text>{subtitle}</Text> : null}
        </div>
      </div>
      <div className="card__body">
        {children}
        {link ? (
          <Link className="card__link" href={link}>
            Read More
          </Link>
        ) : null}
      </div>
    </div>
  );
}
