import React from "react";
import { ReactNode } from "react";
const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-[1290px] h-full">{children}</div>;
};

export default Container;
