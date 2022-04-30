import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { LanguageProvider } from 'context/language'
import { Layout } from 'layout/Layout'

export const App = () => {
    return (
        <ChakraProvider>
            <LanguageProvider>
                <Layout />
            </LanguageProvider>
        </ChakraProvider>
    )
}
