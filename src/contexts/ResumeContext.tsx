import React, { useContext } from 'react'
import { LangType } from 'types'

interface LangContextProps {
    lang: LangType
    changeLang: (lang: LangType) => void
}

export const LangContext = React.createContext<LangContextProps>({
    lang: 'ua',
    changeLang: (lang) => {},
})

export function useLang() {
    const { lang } = useContext(LangContext)

    switch (lang) {
        case 'ua':
            return {}
        case 'ru':
            return {}
        case 'en':
            return {}
        default:
            return {}
    }
}
