import React from 'react'
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import { useResumeData } from 'hooks/useResumeData'
import { DollarIcon } from 'icons/Dollar'
import { IdBadgeIcon } from 'icons/IdBadge'

export const DescriptionSection = () => {
    const { summary } = useResumeData()

    return (
        <Box marginBottom="10px">
            <Flex marginBottom="10px">
                <Center marginRight="10px">
                    <IdBadgeIcon boxSize="30px" />
                </Center>
                <Heading as="h1">{summary.title}</Heading>
            </Flex>

            <Flex marginBottom="5px">
                <Center marginRight="5px">
                    <DollarIcon boxSize="25px" />
                </Center>
                <Text fontSize="20px" fontWeight="semibold">
                    {summary.salary}
                </Text>
            </Flex>

            <Text>{summary.text}</Text>
        </Box>
    )
}
