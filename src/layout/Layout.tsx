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
import { mainGradient } from 'theme/gradients'

export const Layout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isDesctop } = useDevice()

    return (
        <Box>
            <Flex
                position="sticky"
                top="0px"
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
            <Flex bg={mainGradient.background} direction="row">
                {isDesctop ? (
                    <Box maxWidth="250px" bgColor="white">
                        <Sidebar />
                    </Box>
                ) : (
                    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
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
                        margin={{
                            base: '15px 10px 25px 10px',
                            md: '25px 20px 35px 20px',
                            lg: '30px 20px 40px 20px',
                        }}
                        borderRadius="20px"
                        bgColor="white"
                        boxShadow="0px 10px 10px 1px rgba(0,0,0,0.75)"
                    >
                        <ResumePage />
                    </Box>
                </Container>
            </Flex>
        </Box>
    )
}
