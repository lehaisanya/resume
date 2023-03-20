import React, { FC } from 'react'
import { Box, SimpleGrid, BoxProps } from '@chakra-ui/react'
import { mainGradient } from 'theme/gradients'

interface SegmentedProgressProps extends BoxProps {
    segments: number
    value: number
}

export const SegmentedProgress: FC<SegmentedProgressProps> = ({
    segments,
    value,
    ...props
}) => {
    const segmentsList = Array.from(Array(segments), (_, i) => ++i)

    return (
        <SimpleGrid columns={segments} gap="4px" height="10px" {...props}>
            {segmentsList.map((segment) => (
                <Box
                    key={segment}
                    bg={segment <= value ? mainGradient.skills : 'gray.200'}
                />
            ))}
        </SimpleGrid>
    )
}
