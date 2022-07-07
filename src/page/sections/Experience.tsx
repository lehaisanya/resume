import React from 'react'
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from '@chakra-ui/react'
import { TitleLine } from 'components/TitleLine'
import { useResumeData } from 'hooks/useResumeData'
import { BriefcaseIcon } from 'icons/Briefcase'

export const ExperienceSection = () => {
    const { words, experience } = useResumeData()

    return (
        <Box marginBottom="10px">
            <TitleLine marginBottom="10px" icon={BriefcaseIcon}>
                {words.experience}
            </TitleLine>
            <Accordion allowMultiple defaultIndex={experience.map((_, i) => i)}>
                {experience.map((exp, i) => (
                    <AccordionItem key={i}>
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
        </Box>
    )
}
