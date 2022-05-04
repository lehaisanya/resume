import { useLanguage } from 'context/language'
import { ResumeData } from 'types/core'
import { langs } from 'data'

export function useResumeData(): ResumeData {
    const { language } = useLanguage()

    return langs[language]
}
