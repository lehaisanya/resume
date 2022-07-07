import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { ProjectCard } from 'components/ProjectCard'
import { TitleLine } from 'components/TitleLine'
import { useResumeData } from 'hooks/useResumeData'
import { PhysicsIcon } from 'icons/Physics'

export const ProjectsSection = () => {
    const { words, projects } = useResumeData()

    return (
        <Box marginBottom="10px">
            <TitleLine marginBottom="10px" icon={PhysicsIcon}>
                {words.projects}
            </TitleLine>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap="10px">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
