import React from 'react'
import { Box } from '@chakra-ui/react'
import { TitleLine } from 'components/TitleLine'
import { ExperienceItem } from './ExperienceItem'
import { useResumeData } from 'hooks/useResumeData'
import { BriefcaseIcon } from 'icons/Briefcase'

export const ExperienceSection = () => {
    const { words, experience } = useResumeData()

    return (
        <Box>
            <TitleLine marginBottom="10px" icon={BriefcaseIcon}>
                {words.experience}
            </TitleLine>

            {experience.map((exp, i) => (
                <ExperienceItem key={i} experience={exp} />
            ))}
        </Box>
    )
}
