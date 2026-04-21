import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'

export const SUPPORT_LOCALES = ['en', 'ru'] as const
export type SupportedLocale = (typeof SUPPORT_LOCALES)[number]

const STORAGE_KEY = 'locale'
const DEFAULT_LOCALE: SupportedLocale = 'en'

function detectInitialLocale(): SupportedLocale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && (SUPPORT_LOCALES as readonly string[]).includes(stored)) {
    return stored as SupportedLocale
  }
  const browser = window.navigator.language.slice(0, 2).toLowerCase()
  return (SUPPORT_LOCALES as readonly string[]).includes(browser)
    ? (browser as SupportedLocale)
    : DEFAULT_LOCALE
}

const initialLocale = detectInitialLocale()

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, ru },
})

if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', initialLocale)
}

export function setLocale(locale: SupportedLocale): void {
  i18n.global.locale.value = locale
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', locale)
  }
}
