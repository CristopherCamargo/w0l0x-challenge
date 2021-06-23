import React from "react";
import { NavBar } from "@/components/molecules/nav-bar";
import { Logo } from "@/components/atoms";

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => (
  <div>
    <Logo />
    <NavBar />
  </div>
);
