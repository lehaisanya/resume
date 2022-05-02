import React, { useContext } from 'react'
import { Stack, Button } from '@chakra-ui/react'
import { LanguageContext } from 'context/language'

export const LanguageSwitcher = () => {
    const { changeLanguage } = useContext(LanguageContext)

    return (
        <Stack direction="row">
            <Button
                colorScheme="blue"
                size="sm"
                onClick={() => changeLanguage('en')}
            >
                en
            </Button>
            <Button
                colorScheme="blue"
                size="sm"
                onClick={() => changeLanguage('ru')}
            >
                ru
            </Button>
            <Button
                colorScheme="blue"
                size="sm"
                onClick={() => changeLanguage('ua')}
            >
                ua
            </Button>
        </Stack>
    )
}
