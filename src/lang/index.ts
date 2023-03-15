import { Locale, LocaleData } from 'types/locals'
import { en } from './locales/en'
import { ru } from './locales/ru'
import { ua } from './locales/ua'

export const languageNames = ['ua', 'ru', 'en'] // TODO: check if need

export const languages: Record<Locale, LocaleData> = {
    en,
    ru,
    ua,
}
