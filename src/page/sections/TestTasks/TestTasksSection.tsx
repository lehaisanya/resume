import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { TitleLine } from 'components/TitleLine'
import { TestTaskCard } from './TestTaskCard'
import { useResumeData } from 'hooks/useResumeData'
import { FileCheckIcon } from 'icons/FileCheck'

export const TestTaksSection = () => {
    const { words, testTasks } = useResumeData()

    return (
        <Box>
            <TitleLine marginBottom="10px" icon={FileCheckIcon}>
                {words.testTask}
            </TitleLine>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap="10px">
                {testTasks.map((task, i) => (
                    <TestTaskCard key={i} task={task} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
