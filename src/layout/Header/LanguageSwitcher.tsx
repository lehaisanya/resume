import React from 'react'
import { RadioButton, RadioButtons } from 'components/RadioButtons'
import { useLanguage } from 'context/language'
import { languageNames } from 'lang'
import { Locale } from 'types/locals'

export const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage()

    return (
        <RadioButtons
            colorScheme="blue"
            size="sm"
            value={language}
            onChange={(newLanguage) => changeLanguage(newLanguage as Locale)}
        >
            {languageNames.map((option) => (
                <RadioButton key={option} value={option}>
                    {option.toUpperCase()}
                </RadioButton>
            ))}
        </RadioButtons>
    )
}
