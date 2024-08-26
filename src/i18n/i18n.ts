import type { Locale } from "vue-i18n";
import { createI18n } from "vue-i18n";
const i18n = createI18n({
  legacy: false,
  locale: "",
  messages: {},
});

const localesMap = Object.fromEntries(
  Object.entries(import.meta.glob("./locales/*.json")).map(
    ([path, loadLocale]) => [path.match(/([\w-]*)\.json$/)?.[1], loadLocale]
  )
) as Record<Locale, () => Promise<{ default: Record<string, string> }>>;
console.log(localesMap);

export const availableLocales = Object.keys(localesMap);

const loadedLanguages: string[] = [];

function setI18nLanguage(lang: Locale) {
  i18n.global.locale.value = lang as any;
  if (typeof document !== "undefined")
    document.querySelector("html")?.setAttribute("lang", lang);
  return lang;
}

export async function loadLanguageAsync(lang: string): Promise<Locale> {
  // If the same language
  if (i18n.global.locale.value === lang) return setI18nLanguage(lang);

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) return setI18nLanguage(lang);

  // If the language hasn't been loaded yet
  const messages = await localesMap[lang]();

  i18n.global.setLocaleMessage(lang, messages);

  loadedLanguages.push(lang);
  return setI18nLanguage(lang);
}

export const install = ({ app }) => {
  app.use(i18n);
  loadLanguageAsync("zh-CN");
};
