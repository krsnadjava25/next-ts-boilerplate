import React, { FunctionComponent, ReactNode } from "react";

type Properties = {
  children?: ReactNode;
};

const Layout: FunctionComponent<Properties> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
