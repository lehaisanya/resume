import React, { FC, useContext, useState } from 'react'
import { LangType } from 'types'

interface LanguageContextProps {
    language: LangType
    changeLanguage: (lang: LangType) => void
}

export const LanguageContext = React.createContext<LanguageContextProps>(
    undefined!
)

LanguageContext.displayName = 'LanguageContext'

export const LanguageProvider: FC = ({ children }) => {
    const [language, changeLanguage] = useState<LangType>('ua')

    return (
        <LanguageContext.Provider
            value={{
                language,
                changeLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
