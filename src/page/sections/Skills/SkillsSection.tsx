import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { TitleLine } from 'components/TitleLine'
import { Skill } from './Skill'
import { useResumeData } from 'hooks/useResumeData'
import { DiplomaIcon } from 'icons/Diploma'

export const SkillsSection = () => {
    const { words, skills } = useResumeData()

    return (
        <Box>
            <TitleLine marginBottom="5px" icon={DiplomaIcon}>
                {words.skills}
            </TitleLine>

            <SimpleGrid columns={{ base: 2, sm: 3, lg: 4 }} gap="20px">
                {skills.map((skill, i) => (
                    <Skill key={i} skill={skill} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
