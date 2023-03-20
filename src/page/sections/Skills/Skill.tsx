import React, { FC } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { SegmentedProgress } from 'components/SegmentedProgress'
import { SkillData } from 'types/core'

interface SkillProps {
    skill: SkillData
}

export const Skill: FC<SkillProps> = ({ skill }) => {
    return (
        <Box>
            <Text
                fontWeight="semibold"
                textAlign="center"
                whiteSpace="nowrap"
                marginBottom="5px"
            >
                {skill.name}
            </Text>
            <SegmentedProgress segments={5} value={skill.level + 1} />
        </Box>
    )
}
