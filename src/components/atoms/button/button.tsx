import React from "react";

export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

type Props = {
  children: string | React.ReactElement;
  type: ButtonTypes;
};

export const Button = ({ children, type }: Props) => (
  <button className={type}>{children}</button>
);
