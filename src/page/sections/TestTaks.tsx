import { Box, SimpleGrid } from '@chakra-ui/react'
import { ProjectCard } from 'components/ProjectCard'
import { TitleLine } from 'components/TitleLine'
import { useResumeData } from 'hooks/useResumeData'
import { FileCheckIcon } from 'icons/FileCheck'
import React from 'react'

export const TestTaksSection = () => {
    const { words, testTasks } = useResumeData()

    return (
        <Box>
            <TitleLine marginBottom="10px" icon={FileCheckIcon}>
                {words.testTask}
            </TitleLine>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap="10px">
                {testTasks.map((task, i) => (
                    <ProjectCard key={i} project={task} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
