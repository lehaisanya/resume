import React, { FC } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { ExperienceData } from 'types/core'

interface ExperienceItemProps {
    experience: ExperienceData
}

export const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
    return (
        <Box _notLast={{ marginBottom: '20px' }}>
            <Text textStyle="experiencePosition">{experience.position}</Text>

            <Text textStyle="experiencePlace">{experience.place}</Text>

            <Text textStyle="experiencePeriod">{experience.period}</Text>

            <Text>{experience.description}</Text>
        </Box>
    )
}
