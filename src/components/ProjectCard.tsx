import React, { FC } from 'react'
import {
    Box,
    Center,
    Flex,
    Link,
    ListItem,
    Spacer,
    Text,
    UnorderedList,
} from '@chakra-ui/react'
import { ProjectData } from 'types/core'
import { useResumeData } from 'hooks/useResumeData'

interface ProjectCardProps {
    project: ProjectData
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const { words } = useResumeData()

    return (
        <Box
            border="1px solid"
            borderColor="gray.200"
            transitionDuration="0.5s"
            _hover={{
                boxShadow: '0px 0px 8px -3px #000000',
            }}
        >
            <Flex height="40px" borderBottom="1px solid" borderColor="gray.200">
                <Center paddingX="10px">{project.name}</Center>
                <Spacer />
                {project.link ? (
                    <Center paddingRight="10px">
                        <Link
                            color="blue.400"
                            target="_blank"
                            href={project.link}
                        >
                            {words.more}
                        </Link>
                    </Center>
                ) : null}
            </Flex>
            <Box padding="10px">
                <Text>{project.description}</Text>
                <Text fontWeight="semibold">{words.uses}:</Text>
                <UnorderedList>
                    {project.technologies.map((technology) => (
                        <ListItem>{technology}</ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Box>
    )
}
