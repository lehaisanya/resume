import React, { useContext } from 'react'
import { Lang, LangType } from 'types'

import data from './data'
import ua from './ua'
import ru from './ru'
import en from './en'

const makeLang = (lang: Lang) => ({
    ...lang,
    skills: data.skills,
    personal: {
        ...lang.personal,
        ...data.personal
    }
})

const langs = {
    ua: makeLang(ua),
    ru: makeLang(ru),
    en: makeLang(en)
}

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
        case 'ua': return langs.ua
        case 'ru': return langs.ru
        case 'en': return langs.en
        default: return langs.ua
    }
}

