import React from 'react'
import { Center, Flex, Heading, Spacer } from '@chakra-ui/react'
import { useResumeData } from 'hooks/useResumeData'
import { LanguageSwitcher } from './LanguageSwitcher'

export const Header = () => {
    const { personal } = useResumeData()

    return (
        <Flex
            height="100%"
            width="100%"
            paddingLeft={{ base: '0px', md: '10px' }}
            paddingRight="10px"
        >
            <Center height="100%">
                <Heading size="md">{personal.name}</Heading>
            </Center>

            <Spacer />

            <Center>
                <LanguageSwitcher />
            </Center>
        </Flex>
    )
}
