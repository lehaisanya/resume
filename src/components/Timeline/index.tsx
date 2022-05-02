import React, { FC } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
export { TimelineItem } from './TimelineItem'

export const Timeline: FC<BoxProps> = ({ children, ...props }) => {
    return <Box {...props}>{children}</Box>
}
