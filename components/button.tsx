import React, { FunctionComponent } from "react";

type Properties = {
  text: string;
  children?: string;
};

const Button: FunctionComponent<Properties> = ({ children }) => {
  return <div>{children}</div>;
};

export default Button;
