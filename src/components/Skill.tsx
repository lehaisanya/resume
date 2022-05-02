import React, { FC } from 'react'
import { Box, Progress, Text } from '@chakra-ui/react'
import { SkillData } from 'types/core'

interface SkillProps {
    skill: SkillData
}

export const Skill: FC<SkillProps> = ({ skill }) => {
    return (
        <Box>
            <Text fontWeight="semibold" textAlign="center">
                {skill.name}
            </Text>
            <Progress value={skill.level} max={4} />
        </Box>
    )
}
