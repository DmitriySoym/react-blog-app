import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

export enum PortalTarget {
  MODAL = "modal",
}

interface IProps {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = ({ children, target }: IProps) => {
  const container = document.getElementById(target) as HTMLElement;
  return createPortal(children, container);
};
