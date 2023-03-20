import React, { Fragment } from 'react'
import { Avatar, Box, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import { InfoLine } from 'components/InfoLine'
import { UserIcon } from 'icons/User'
import { useResumeData } from 'hooks/useResumeData'
import { CalendarIcon } from 'icons/Calendar'
import { MarkerIcon } from 'icons/Marker'
import { SmartphoneIcon } from 'icons/Smartphone'
import { GithubIcon } from 'icons/Github'
import { PaperPlaneIcon } from 'icons/PaperPlane'
import { EnvelopIcon } from 'icons/Envelop'
import avatar from 'assets/avatar.jpg'

export const Sidebar = () => {
    const { words, personal, languages } = useResumeData()

    return (
        <Box padding={{ base: '0px', md: '10px' }}>
            <Box margin="10px">
                <Avatar size="full" src={avatar} />
            </Box>

            <Heading as="h3" size="sm" textAlign="center" marginBottom="5px">
                {words.personalData}
            </Heading>

            <InfoLine title={words.name} icon={UserIcon}>
                {personal.name}
            </InfoLine>

            <InfoLine title={words.birthday} icon={CalendarIcon}>
                {personal.birthday}
            </InfoLine>

            <InfoLine title={words.place} icon={MarkerIcon}>
                {personal.place}
            </InfoLine>

            <InfoLine title={words.telephone} icon={SmartphoneIcon}>
                <Link color="teal.600" href={'tel:' + personal.telephone}>
                    {personal.telephone}
                </Link>
            </InfoLine>

            <InfoLine title="Github" icon={GithubIcon}>
                <Link
                    color="teal.600"
                    href={'https://github.com/' + personal.github}
                    target="_blank"
                >
                    @{personal.github}
                </Link>
            </InfoLine>

            <InfoLine title={words.telegram} icon={PaperPlaneIcon}>
                <Link
                    color="teal.600"
                    href={'https://t.me/' + personal.telegram}
                    target="_blank"
                >
                    @{personal.telegram}
                </Link>
            </InfoLine>

            <InfoLine title={words.email} icon={EnvelopIcon} marginBottom="5px">
                <Link
                    color="teal.600"
                    href={'mailto:' + personal.email}
                    target="_blank"
                >
                    {personal.email}
                </Link>
            </InfoLine>

            <Heading as="h3" size="sm" textAlign="center" marginBottom="5px">
                {words.languages}
            </Heading>

            <SimpleGrid columns={2} marginBottom="30px">
                {languages.map((language, i) => (
                    <Fragment key={i}>
                        <Box>{language.name}:</Box>
                        <Box>{language.level}</Box>
                    </Fragment>
                ))}
            </SimpleGrid>
        </Box>
    )
}
