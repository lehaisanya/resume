import React, { FC, useContext, useState } from 'react'
import { Locale } from 'types/locals'

interface LanguageContextProps {
    language: Locale
    changeLanguage: (lang: Locale) => void
}

export const LanguageContext = React.createContext<LanguageContextProps>(
    undefined!
)

LanguageContext.displayName = 'LanguageContext'

export const LanguageProvider: FC = ({ children }) => {
    const [language, changeLanguage] = useState<Locale>('ua')

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
