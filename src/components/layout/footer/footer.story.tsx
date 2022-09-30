import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "Sameer Kulkarni",
  linkedin: "https://www.linkedin.com/in/sameerkulkarni30/",
  github: "https://github.com/cricketsamya",
  instagram: "https://instagram.com/sameer_travelphotography/",
  twitter: "https://twitter.com/cricketsamya",
};

story.add("Footer", () => <Footer {...data} />);
