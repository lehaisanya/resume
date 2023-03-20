import React from 'react'
import { Box } from '@chakra-ui/react'
import { TitleLine } from 'components/TitleLine'
import { useResumeData } from 'hooks/useResumeData'
import { GraduationCapIcon } from 'icons/GraduationCap'
import { EducationItem } from './EducationItem'

export const EducationSection = () => {
    const { words, educations } = useResumeData()

    return (
        <Box>
            <TitleLine marginBottom="5px" icon={GraduationCapIcon}>
                {words.education}
            </TitleLine>

            {educations.map((education, i) => (
                <EducationItem key={i} education={education} />
            ))}
        </Box>
    )
}
