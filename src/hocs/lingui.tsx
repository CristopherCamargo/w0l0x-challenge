import React from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@/locales";

type Props = {
  children: JSX.Element;
};

export const LinguiHOC = ({ children }: Props) => {
  const userLang = "es-co";

  i18n.activate(userLang);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};
