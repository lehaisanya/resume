import React, { FC } from 'react'
import { Text } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { useResumeData } from 'hooks/useResumeData'
import { createLinks } from 'components/Card/utils'
import { TestTaskData } from 'types/core'

interface TestTaskCardProps {
    task: TestTaskData
}

export const TestTaskCard: FC<TestTaskCardProps> = ({ task }) => {
    const { words } = useResumeData()

    const links = createLinks([
        task.viewLink
            ? {
                  text: words.view,
                  href: task.viewLink,
              }
            : null,
        {
            text: words.more,
            href: task.repository,
        },
    ])

    return (
        <Card title={task.name} links={links}>
            <Text>{task.description}</Text>
            <Text fontWeight="semibold">{words.uses}:</Text>
            <Text>{task.technologies.join(', ')}</Text>
        </Card>
    )
}
