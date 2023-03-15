import React from 'react'
import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
} from '@chakra-ui/react'
import { useLanguage } from 'context/language'
import { languageNames } from 'lang'
import { Locale } from 'types/locals'

export const LanguageMenu = () => {
    const { language, changeLanguage } = useLanguage()

    return (
        <Menu>
            <MenuButton as={Button} colorScheme="blue" size="sm">
                {language.toUpperCase()}
            </MenuButton>
            <MenuList color="black" minWidth="30px">
                <MenuOptionGroup
                    type="radio"
                    value={language}
                    onChange={(newLanguage) =>
                        changeLanguage(newLanguage as Locale)
                    }
                >
                    {languageNames.map((option) => (
                        <MenuItemOption
                            key={option}
                            value={option}
                            height="25px"
                        >
                            {option.toUpperCase()}
                        </MenuItemOption>
                    ))}
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    )
}
