import React, { FC } from 'react'
import { Box, BoxProps, Center, Flex, IconProps, Text } from '@chakra-ui/react'

interface InfoLineProps extends BoxProps {
    icon: FC<IconProps>
    title: string
}

export const InfoLine: FC<InfoLineProps> = ({
    icon: Icon,
    title,
    children,
    ...props
}) => {
    return (
        <Flex direction="row" {...props}>
            <Center marginRight="10px">
                <Icon boxSize="25px" />
            </Center>
            <Box>
                <Text fontWeight="bold">{title}</Text>
                <Box>{children}</Box>
            </Box>
        </Flex>
    )
}
