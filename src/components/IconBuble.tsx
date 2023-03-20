import React, { FC } from 'react'
import { BoxProps, Center } from '@chakra-ui/react'
import { mainGradient } from 'theme/gradients'

export const IconBuble: FC<BoxProps> = ({ children, ...boxProps }) => {
    return (
        <Center
            padding="10px"
            borderRadius="50%"
            bg={mainGradient.icon}
            boxShadow="0px 4px 10px -2px rgba(0,0,0,0.75)"
            color="white"
            {...boxProps}
        >
            {children}
        </Center>
    )
}
