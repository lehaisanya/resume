import React, { FC } from 'react'
import { Box, Flex } from '@chakra-ui/react'

export const TimelineItem: FC = ({ children }) => {
    return (
        <Flex
            position="relative"
            _notLast={{
                marginBottom: '10px',
                _before: {
                    content: '""',
                    position: 'absolute',
                    height: '100%',
                    top: '21px',
                    left: '14px',
                    width: '2px',
                    bgColor: 'blue.600',
                    zIndex: 1,
                },
            }}
        >
            <Box
                margin="10px 7px"
                position="relative"
                bgColor={`white`}
                border="2px solid"
                borderColor={`blue.600`}
                borderRadius="50%"
                width="15px"
                height="15px"
                zIndex={2}
            />
            <Box flex="1">{children}</Box>
        </Flex>
    )
}
