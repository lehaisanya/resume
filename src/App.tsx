import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { LanguageProvider } from 'context/language'
import { Layout } from 'layout/Layout'
import { theme } from 'theme'

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <LanguageProvider>
                <Layout />
            </LanguageProvider>
        </ChakraProvider>
    )
}
