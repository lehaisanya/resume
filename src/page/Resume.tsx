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
import { Section } from 'layout/Section'

export const ResumePage = () => {
    const { words, personal } = useResumeData()

    usePageTitle(`[${words.resume}] ${personal.name}`)

    return (
        <Box padding={{ base: '15px', md: '25px' }}>
            <Section>
                <DescriptionSection />
            </Section>

            <Section>
                <SkillsSection />
            </Section>

            <Section>
                <ExperienceSection />
            </Section>

            <Section>
                <EducationSection />
            </Section>

            <Section>
                <ProjectsSection />
            </Section>

            <Section>
                <TestTaksSection />
            </Section>
        </Box>
    )
}
