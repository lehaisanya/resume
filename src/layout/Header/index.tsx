import React from 'react'
import { Center, Flex, Heading, Spacer } from '@chakra-ui/react'
import { useResumeData } from 'hooks/useResumeData'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useDevice } from 'hooks/useDevice'
import { LanguageMenu } from './LanguageMenu'

export const Header = () => {
    const { isMobile } = useDevice()
    const { personal } = useResumeData()

    return (
        <Flex
            width="100%"
            paddingLeft={{ base: '0px', md: '10px' }}
            paddingRight="10px"
            paddingY="10px"
        >
            <Center>
                <Heading size="md">{personal.name}</Heading>
            </Center>

            <Spacer />

            <Center>
                {isMobile ? <LanguageMenu /> : <LanguageSwitcher />}
            </Center>
        </Flex>
    )
}
