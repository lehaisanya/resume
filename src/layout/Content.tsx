import React from 'react'
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Center,
    Flex,
    Heading,
    SimpleGrid,
    Text,
} from '@chakra-ui/react'
import { useResumeData } from 'hooks/useResumeData'
import { IdBadgeIcon } from 'icons/IdBadge'
import { GraduationCapIcon } from 'icons/GraduationCap'
import { BriefcaseIcon } from 'icons/Briefcase'
import { TitleLine } from 'components/TitleLine'
import { DiplomaIcon } from 'icons/Diploma'
import { PhysicsIcon } from 'icons/Physics'
import { ProjectCard } from 'components/ProjectCard'
import { Skill } from 'components/Skill'
import { Timeline, TimelineItem } from 'components/Timeline'

export const Content = () => {
    const { description, words, experience, projects, skills, educations } =
        useResumeData()

    return (
        <Box padding="15px">
            <Flex marginBottom="10px">
                <Center marginRight="10px">
                    <IdBadgeIcon boxSize="30px" />
                </Center>
                <Heading as="h1">{description.title}</Heading>
            </Flex>

            <Text marginBottom="5px" fontSize="20px" fontWeight="semibold">
                {description.salary}
            </Text>

            <Text marginBottom="10px">{description.text}</Text>

            <TitleLine marginBottom="5px" icon={GraduationCapIcon}>
                {words.education}
            </TitleLine>
            <Timeline marginBottom="10px">
                {educations.map((education) => (
                    <TimelineItem>
                        <Flex>
                            <Box flex="1" marginRight="10px" marginTop="5px">
                                {education.start}
                                {education.end ? ' - ' + education.end : null}
                            </Box>
                            <Box flex="2">
                                <Text>{education.name}</Text>
                                <Text>{education.place}</Text>
                                {education.extra ? (
                                    <Text>{education.extra}</Text>
                                ) : null}
                            </Box>
                        </Flex>
                    </TimelineItem>
                ))}
            </Timeline>

            <TitleLine marginBottom="10px" icon={BriefcaseIcon}>
                {words.experience}
            </TitleLine>
            <Accordion
                marginBottom="10px"
                allowMultiple
                defaultIndex={experience.map((exp, i) => i)}
            >
                {experience.map((exp) => (
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                {exp.title} - {exp.period}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel>{exp.description}</AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>

            <TitleLine marginBottom="5px" icon={DiplomaIcon}>
                {words.skills}
            </TitleLine>
            <SimpleGrid
                columns={{ base: 2, sm: 3, lg: 4 }}
                gap="20px"
                marginBottom="10px"
            >
                {skills.map((skill) => (
                    <Skill skill={skill} />
                ))}
            </SimpleGrid>

            <TitleLine marginBottom="10px" icon={PhysicsIcon}>
                {words.projects}
            </TitleLine>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap="10px">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
