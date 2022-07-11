import React from 'react'
import {
    Box,
    Center,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { ResumePage } from 'page/Resume'
import { ListIcon } from 'icons/List'
import { useDevice } from 'hooks/useDevice'

export const Layout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isDesctop } = useDevice()

    return (
        <Box>
            <Flex
                position="fixed"
                zIndex="100"
                width="100%"
                bgColor="blue.800"
                color="white"
            >
                {!isDesctop ? (
                    <Center marginX="10px">
                        <IconButton
                            aria-label="Open Sidebar"
                            size="sm"
                            colorScheme="blue"
                            icon={<ListIcon />}
                            onClick={onOpen}
                        />
                    </Center>
                ) : null}
                <Header />
            </Flex>
            <Box width="100%" height="50px" />
            <Flex bgColor="gray.300" direction="row">
                {isDesctop ? (
                    <Box maxWidth="250px" bgColor="white">
                        <Sidebar />
                    </Box>
                ) : (
                    <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />

                            <DrawerBody>
                                <Sidebar />
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                )}
                <Container maxWidth="container.lg" padding="0px">
                    <Box
                        margin={{ base: '0px', md: '15px' }}
                        borderRadius={{ base: '0px', md: '20px' }}
                        bgColor="white"
                    >
                        <ResumePage />
                    </Box>
                </Container>
            </Flex>
        </Box>
    )
}
