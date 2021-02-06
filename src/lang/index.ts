import React, { useContext } from 'react'
import { LangType } from 'types'

import ua from './ua'
import ru from './ru'
import en from './en'

interface LangContextProps {
    lang: LangType
    changeLang: (lang: LangType) => void
}

export const LangContext = React.createContext<LangContextProps>({
    lang: 'ua',
    changeLang: (lang: LangType): void => {}
})

export const useDict = () => {
    const { lang } = useContext(LangContext)
    
    switch (lang) {
        case 'ua': return ua
        case 'ru': return ru
        case 'en': return en
        default: return ua
    }
}

