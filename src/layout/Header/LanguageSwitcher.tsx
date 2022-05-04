import React from 'react'
import { RadioButton, RadioButtons } from 'components/RadioButtons'
import { useLanguage } from 'context/language'
import { LangType } from 'types'

const languages = ['ua', 'ru', 'en']

export const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage()

    return (
        <RadioButtons
            colorScheme="blue"
            size="sm"
            value={language}
            onChange={(newLanguage) => changeLanguage(newLanguage as LangType)}
        >
            {languages.map((option) => (
                <RadioButton key={option} value={option}>
                    {option.toUpperCase()}
                </RadioButton>
            ))}
        </RadioButtons>
    )
}
