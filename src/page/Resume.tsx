import React from 'react'
import { Box } from '@chakra-ui/react'
import { DescriptionSection } from './sections/Description'
import { EducationSection } from './sections/Education'
import { ExperienceSection } from './sections/Experience'
import { SkillsSection } from './sections/Skills'
import { ProjectsSection } from './sections/Projects'
import { TestTaksSection } from './sections/TestTasks'
import { useResumeData } from 'hooks/useResumeData'
import { usePageTitle } from 'hooks/usePageTitle'

export const ResumePage = () => {
    const { words, personal } = useResumeData()

    usePageTitle(`[${words.resume}] ${personal.name}`)

    return (
        <Box padding="15px">
            <DescriptionSection />

            <EducationSection />

            <ExperienceSection />

            <SkillsSection />

            <ProjectsSection />

            <TestTaksSection />
        </Box>
    )
}
