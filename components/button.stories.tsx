import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button";

storiesOf("Button", module)
  .add("Primary", () => {
    return <Button text="Hello World" />;
  })
  .add("With Emoji", () => {
    return <Button text="😀 😎 👍 💯" />;
  });
