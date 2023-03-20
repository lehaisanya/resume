import { useLanguage } from 'context/language'
import { languages } from 'lang'
import { LocaleData } from 'types/locals'

export function useResumeData(): LocaleData {
    const { language } = useLanguage()

    return languages[language]
}
