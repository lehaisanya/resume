import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { TitleLine } from 'components/TitleLine'
import { Timeline, TimelineItem } from 'components/Timeline'
import { useResumeData } from 'hooks/useResumeData'
import { GraduationCapIcon } from 'icons/GraduationCap'

export const EducationSection = () => {
    const { words, educations } = useResumeData()

    return (
        <Box marginBottom="10px">
            <TitleLine marginBottom="5px" icon={GraduationCapIcon}>
                {words.education}
            </TitleLine>
            <Timeline>
                {educations.map((education, i) => (
                    <TimelineItem key={i}>
                        <Flex>
                            <Box flex="1" marginRight="10px" marginTop="5px">
                                {education.start}
                                {education.end ? ' - ' + education.end : null}
                            </Box>
                            <Box flex="2">
                                <Text>{education.name}</Text>
                                <Text>{education.place}</Text>
                                {education.extra ? (
                                    <Text>{education.extra}</Text>
                                ) : null}
                            </Box>
                        </Flex>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    )
}
