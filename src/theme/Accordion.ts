import { accordionAnatomy as parts } from '@chakra-ui/anatomy'
import type { PartsStyleObject } from '@chakra-ui/theme-tools'

const baseStyle: PartsStyleObject<typeof parts> = {
    root: {},
    panel: {},
    icon: {},
    container: {
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
    },
    button: {
        borderBottomWidth: '1px',
        borderBottomColor: 'inherit',
        bgColor: 'gray.100',
        _hover: {
            bg: 'gray.200',
        },
    },
}

export const Accordion = {
    baseStyle,
}
