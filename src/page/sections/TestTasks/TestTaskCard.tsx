import React, { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { TestTaskData } from 'types/core'

interface TestTaskCardProps {
    task: TestTaskData
}

export const TestTaskCard: FC<TestTaskCardProps> = ({ task }) => {
    return <Box>{task.name}</Box>
}
