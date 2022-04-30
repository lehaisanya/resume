import { useContext } from 'react'
import { LanguageContext } from 'context/language'
import { ResumeData } from 'types/core'
import { langs } from 'data'

export function useResumeData(): ResumeData {
    const { language } = useContext(LanguageContext)

    return langs[language]
}
