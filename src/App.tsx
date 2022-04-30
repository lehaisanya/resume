import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from 'layout/Layout'
import { LangContext } from 'contexts/ResumeContext'
import { LangType } from 'types'

export const App = () => {
    const [lang, setLang] = useState<LangType>('ua')

    return (
        <ChakraProvider>
            <LangContext.Provider
                value={{
                    lang,
                    changeLang: setLang,
                }}
            >
                <Layout />
            </LangContext.Provider>
        </ChakraProvider>
    )
}
