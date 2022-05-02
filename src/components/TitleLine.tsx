import React, { FC } from 'react'
import { BoxProps, Center, Flex, Heading, IconProps } from '@chakra-ui/react'

interface TitleLineProps extends BoxProps {
    icon: FC<IconProps>
}

export const TitleLine: FC<TitleLineProps> = ({
    icon: Icon,
    children,
    ...props
}) => {
    return (
        <Flex {...props}>
            <Center marginRight="7px">
                <Icon boxSize="25px" />
            </Center>
            <Heading fontSize="25px" fontWeight="medium">
                {children}
            </Heading>
        </Flex>
    )
}
