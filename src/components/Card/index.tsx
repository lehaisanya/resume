import React, { FC } from 'react'
import { Box, Center, Flex, Link, Spacer, Stack } from '@chakra-ui/react'

export interface LinkData {
    text: string
    href: string
}

interface CardProps {
    title: string
    links: LinkData[]
}

export const Card: FC<CardProps> = ({ title, links, children }) => {
    return (
        <Box
            border="1px solid"
            borderColor="gray.200"
            transitionDuration="0.5s"
            _hover={{
                boxShadow: '0px 0px 8px -3px #000',
            }}
        >
            <Flex
                borderBottom="1px solid"
                borderColor="gray.200"
                padding="10px"
            >
                <Center fontWeight="semibold">{title}</Center>
                <Spacer />
                <Stack direction="row" spacing="10px">
                    {links.map((link, i) => (
                        <Center key={i}>
                            <Link
                                color="blue.400"
                                target="_blank"
                                href={link.href}
                            >
                                {link.text}
                            </Link>
                        </Center>
                    ))}
                </Stack>
            </Flex>
            <Box padding="10px">{children}</Box>
        </Box>
    )
}
