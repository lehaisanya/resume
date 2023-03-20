import React from 'react'
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import { useResumeData } from 'hooks/useResumeData'
import { DollarIcon } from 'icons/Dollar'
import { IdBadgeIcon } from 'icons/IdBadge'
import { IconBuble } from 'components/IconBuble'

export const DescriptionSection = () => {
    const { summary } = useResumeData()

    return (
        <Box>
            <Flex marginBottom="20px">
                <Center marginRight="15px">
                    <IconBuble>
                        <IdBadgeIcon boxSize="30px" />
                    </IconBuble>
                </Center>

                <Center>
                    <Heading as="h1" size="lg">
                        {summary.title}
                    </Heading>
                </Center>
            </Flex>

            <Flex marginBottom="10px">
                <Center marginRight="15px">
                    <IconBuble>
                        <DollarIcon boxSize="25px" />
                    </IconBuble>
                </Center>

                <Center>
                    <Text fontSize="20px" fontWeight="semibold">
                        {summary.salary}
                    </Text>
                </Center>
            </Flex>

            <Text>{summary.text}</Text>
        </Box>
    )
}
