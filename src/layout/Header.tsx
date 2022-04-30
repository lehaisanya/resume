import React from 'react'
import { Box, Center } from '@chakra-ui/react'

export const Header = () => {
    return (
        <Box
            height="100%"
            width="100%"
            paddingLeft={{ base: '0px', md: '10px' }}
            paddingRight="10px"
        >
            <Center height="100%" width="min-content">
                Header
            </Center>
        </Box>
    )
}
