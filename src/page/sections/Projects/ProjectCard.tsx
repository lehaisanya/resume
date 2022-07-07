import React, { FC } from 'react'
import { Text } from '@chakra-ui/react'
import { Card } from 'components/Card'
import { useResumeData } from 'hooks/useResumeData'
import { createLinks } from 'components/Card/utils'
import { ProjectData } from 'types/core'

interface ProjectCardProps {
    project: ProjectData
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const { words } = useResumeData()

    const links = createLinks([
        project.viewLink
            ? {
                  text: words.view,
                  href: project.viewLink,
              }
            : null,
        project.repository
            ? {
                  text: words.more,
                  href: project.repository,
              }
            : null,
    ])

    return (
        <Card title={project.name} links={links}>
            <Text>{project.description}</Text>
            {project.inProgress ? (
                <Text color="green.400">{words.inProgress}</Text>
            ) : null}
            <Text fontWeight="semibold">{words.uses}:</Text>
            <Text>{project.technologies.join(', ')}</Text>
        </Card>
    )
}
