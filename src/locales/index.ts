import { setupI18n } from "@lingui/core";
import { messages as enMessages } from "./en/messages";
import { messages as esCoMessages } from "./es-co/messages";

const messages = {
  en: enMessages,
  cs: esCoMessages
}

export const i18n = setupI18n({
  locale: "es-co",
  locales: ["es", "es-co", "en"],
  messages
});