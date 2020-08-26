import React, { useState } from "react";

import Dash from "../../components/templates/dashboard";
import Sample1 from "../../../assets/images/sample1.jpg";
import Sample2 from "../../../assets/images/sample2.jpg";
import Sample3 from "../../../assets/images/sample3.jpg";
import Sample4 from "../../../assets/images/sample4.jpg";
import Sample5 from "../../../assets/images/sample5.jpg";
import Sample6 from "../../../assets/images/sample6.jpg";
import Sample7 from "../../../assets/images/sample7.jpg";
import Sample8 from "../../../assets/images/sample8.jpg";
import Sample9 from "../../../assets/images/sample9.jpg";

export default function Dashboard() {
  const [posts, setPosts] = useState([
    {
      type: "card",
      title: "Example Something",
      subtitle: "Another Subtitle",
      image: Sample1,
      align: "left",
      link: "#",
    },
    {
      type: "image",
      images: [
        {
          src: Sample2,
          alt: "an Image",
        },
        {
          src: Sample3,
          alt: "an Image",
        },
        {
          src: Sample9,
          alt: "an Image",
        },
        {
          src: Sample7,
          alt: "an Image",
        },
      ],
    },
    {
      type: "image",
      images: [
        {
          src: Sample2,
          alt: "an Image",
        },
        {
          src: Sample5,
          alt: "an Image",
        },
      ],
    },
    {
      type: "card",
      title: "Example of Video Game",
      subtitle: "The Subtitle is Here",
      image: Sample4,
      align: "left",
      link: "#",
    },
    {
      type: "image",
      images: [
        {
          src: Sample2,
          alt: "an Image",
        },
        {
          src: Sample8,
          alt: "an Image",
        },
        {
          src: Sample9,
          alt: "an Image",
        },
      ],
    },
    {
      type: "card",
      title: "Example of Card",
      subtitle: "What is This?",
      image: Sample5,
      align: "left",
      link: "#",
    },
  ]);

  return <Dash items={posts} />;
}
