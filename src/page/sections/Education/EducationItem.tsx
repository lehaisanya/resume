import React, { FC } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { EducationData } from 'types/core'

interface EducationItemProps {
    education: EducationData
}

export const EducationItem: FC<EducationItemProps> = ({ education }) => {
    return (
        <Box
            _notLast={{
                marginBottom: '20px',
            }}
        >
            <Text as="h3" textStyle="educationTitle">
                {education.place}
            </Text>

            <Text textStyle="educationGrade">{education.name}</Text>

            <Text textStyle="educationTime">
                {education.start}
                {education.end ? ' - ' + education.end : null}
            </Text>

            <Text textStyle="educationTime">
                {education.extra ? ' ' + education.extra : null}
            </Text>
        </Box>
    )
}
