import React, { FC } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

export const Section: FC<BoxProps> = ({ children, ...boxProps }) => {
    return (
        <Box
            as="section"
            _notLast={{
                marginBottom: '30px',
            }}
            {...boxProps}
        >
            {children}
        </Box>
    )
}
