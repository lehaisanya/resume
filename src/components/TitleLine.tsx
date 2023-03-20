import React, { FC } from 'react'
import { BoxProps, Center, Flex, Heading, IconProps } from '@chakra-ui/react'
import { IconBuble } from './IconBuble'

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
                <IconBuble>
                    <Icon boxSize="25px" />
                </IconBuble>
            </Center>

            <Center>
                <Heading fontSize="25px" fontWeight="medium">
                    {children}
                </Heading>
            </Center>
        </Flex>
    )
}
